import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditComponent = () => {
  const { pageName, componentIndex } = useParams();
  const navigate = useNavigate();
  const [componentData, setComponentData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [subImageSearchQuery, setSubImageSearchQuery] = useState("");
  const [subImageSearchResults, setSubImageSearchResults] = useState([]);

  useEffect(() => {
    const fetchComponentData = async () => {
      try {
        const response = await fetch(`/api/page/${pageName}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch component data");
        }

        setComponentData(data.components[componentIndex]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchComponentData();
  }, [pageName, componentIndex]);

  const handleInputChange = (field, value) => {
    setComponentData((prev) => ({
      ...prev,
      props: {
        ...prev.props,
        [field]: value,
      },
    }));
  };

  const handleArrayChange = (field, index, key, value) => {
    setComponentData((prev) => {
      const updatedArray = [...prev.props[field]];
      updatedArray[index] = { ...updatedArray[index], [key]: value };

      return {
        ...prev,
        props: {
          ...prev.props,
          [field]: updatedArray,
        },
      };
    });
  };

  const handleAltTextChange = (field, index, lang, value) => {
    setComponentData((prev) => {
      const updatedArray = [...prev.props[field]];
      updatedArray[index].altText[lang] = value;

      return {
        ...prev,
        props: {
          ...prev.props,
          [field]: updatedArray,
        },
      };
    });
  };

  const handleHeaderChange = (field, index, lang, value) => {
    setComponentData((prev) => {
      const updatedArray = [...prev.props[field]];
      updatedArray[index].header[lang] = value;

      return {
        ...prev,
        props: {
          ...prev.props,
          [field]: updatedArray,
        },
      };
    });
  };

  const handleTextChange = (field, index, lang, value) => {
    setComponentData((prev) => {
      const updatedArray = [...prev.props[field]];
      updatedArray[index].text[lang] = value;

      return {
        ...prev,
        props: {
          ...prev.props,
          [field]: updatedArray,
        },
      };
    });
  };

  const handleAddItem = (field) => {
    setComponentData((prev) => ({
      ...prev,
      props: {
        ...prev.props,
        [field]: [
          ...prev.props[field],
          field === "images" || field === "subImages"
            ? {
                firebaseUrl: "",
                altText: { en: "", tr: "", de: "", ru: "" },
                width: 0,
                height: 0,
              }
            : { en: "", tr: "", de: "", ru: "" },
        ],
      },
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/images/search?name=${searchQuery}&lang=en`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Image not found");
      }

      setSearchResults([data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubImageSearch = async () => {
    try {
      const response = await fetch(`/api/images/search?name=${subImageSearchQuery}&lang=en`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "SubImage not found");
      }

      setSubImageSearchResults([data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReplaceImage = (field, index, selectedImage) => {
    handleArrayChange(field, index, "firebaseUrl", selectedImage.firebaseUrl);
    handleArrayChange(field, index, "altText", selectedImage.altText);
  };

  const handleSave = async () => {
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`/api/page/${pageName}/components/${componentIndex}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(componentData),
      });

      if (!response.ok) {
        throw new Error("Failed to save component data");
      }

      setSuccess(true);
      navigate(`/panel/pages/${pageName}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) return <p>Error: {error}</p>;
  if (!componentData) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center">
      <h1>Edit Component: {componentData.type}</h1>

      {/* General props editing */}
      {Object.keys(componentData.props || {}).map((key) => {
        if (
          key !== "images" &&
          key !== "subImages" &&
          key !== "headers" &&
          key !== "texts" &&
          key !== "links"
        ) {
          return (
            <div key={key} className="flex flex-col gap-2">
              <label>{key}</label>
              <input
                type="text"
                value={componentData.props[key]}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </div>
          );
        }
        return null;
      })}

      {/* Images editing */}
      {componentData.props.images?.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#0e0c1b] text-[20px] font-bold pl-2">Images</h2>
          {componentData.props.images.map((image, index) => (
            <div key={index} className="flex flex-col gap-2 border p-4 rounded-md">
              <h3>Image {index + 1}</h3>
              <label className="text-[#246cfc] text-[18px] font-semibold">Firebase URL</label>
              <input
                type="text"
                value={image.firebaseUrl}
                onChange={(e) =>
                  handleArrayChange("images", index, "firebaseUrl", e.target.value)
                }
              />

              {Object.keys(image.altText || {}).map((lang) => (
                <div key={lang} className="flex flex-col gap-2">
                  <label className="text-[#246cfc] text-[18px] font-semibold">Alt Text ({lang})</label>
                  <input
                    type="text"
                    value={image.altText[lang]}
                    onChange={(e) =>
                      handleAltTextChange("images", index, lang, e.target.value)
                    }
                  />
                </div>
              ))}

        {Object.keys(image.header || {}).map((lang) => (
                <div key={lang} className="flex flex-col gap-2">
                  <label className="text-[#246cfc] text-[18px] font-semibold">Header ({lang})</label>
                  <input
                    type="text"
                    value={image.header[lang]}
                    onChange={(e) =>
                      handleHeaderChange("images", index, lang, e.target.value)
                    }
                  />
                </div>
              ))}

              {Object.keys(image.text || {}).map((lang) => (
                <div key={lang} className="flex flex-col gap-2">
                  <label className="text-[#246cfc] text-[18px] font-semibold">Text ({lang})</label>
                  <input
                    type="text"
                    value={image.text[lang]}
                    onChange={(e) =>
                      handleTextChange("images", index, lang, e.target.value)
                    }
                  />
                </div>
              ))}

              

              {/* Image search */}
              <div className="flex flex-col gap-2">
                <label className="text-[#246cfc] text-[18px] font-semibold">Search for a new image</label>
                <input
                  type="text"
                  placeholder="Enter image name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border py-2 px-3"
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Search
                </button>

                {searchResults.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    <h4>Search Results</h4>
                    {searchResults.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 border p-2 rounded-md cursor-pointer"
                        onClick={() => handleReplaceImage("images", index, result)}
                      >
                        <img
                          src={result.firebaseUrl}
                          alt={result.altText.en}
                          className="w-16 h-16 object-cover"
                        />
                        <p>{result.altText.en}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
            <button
            onClick={() => handleAddItem("images")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New Image
          </button>
        </div>
      )}

      {/* SubImages editing */}
      {componentData.props.subImages?.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          <h2>Sub Images</h2>
          {componentData.props.subImages.map((subImage, index) => (
            <div key={index} className="flex flex-col gap-2 border p-4 rounded-md">
              <h3>Sub Image {index + 1}</h3>
              <label>Firebase URL</label>
              <input
                type="text"
                value={subImage.firebaseUrl}
                onChange={(e) =>
                  handleArrayChange("subImages", index, "firebaseUrl", e.target.value)
                }
              />

              {Object.keys(subImage.altText || {}).map((lang) => (
                <div key={lang} className="flex flex-col gap-2">
                  <label>Alt Text ({lang})</label>
                  <input
                    type="text"
                    value={subImage.altText[lang]}
                    onChange={(e) =>
                      handleAltTextChange("subImages", index, lang, e.target.value)
                    }
                  />
                </div>
              ))}
              {/* SubImage search */}
              <div className="flex flex-col gap-2">
                <label>Search for a new sub-image</label>
                <input
                  type="text"
                  placeholder="Enter sub-image name"
                  value={subImageSearchQuery}
                  onChange={(e) => setSubImageSearchQuery(e.target.value)}
                  className="border py-2 px-3"
                />
                <button
                  onClick={handleSubImageSearch}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Search
                </button>

                {subImageSearchResults.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    <h4>Search Results</h4>
                    {subImageSearchResults.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 border p-2 rounded-md cursor-pointer"
                        onClick={() => handleReplaceImage("subImages", index, result)}
                      >
                        <img
                          src={result.firebaseUrl}
                          alt={result.altText.en}
                          className="w-16 h-16 object-cover"
                        />
                        <p>{result.altText.en}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
           <button
            onClick={() => handleAddItem("subImages")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New SubImage
          </button>
        </div>
      )}


      <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
      {success && <p className="text-green-500">Component updated successfully!</p>}
    </div>
  );
};

export default EditComponent;