import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditComponent = () => {
  const { pageName, componentIndex } = useParams();
  const navigate = useNavigate();
  const [componentData, setComponentData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

  const handleImageChange = (index, field, value) => {
    setComponentData((prev) => {
      const updatedImages = prev.props.images.map((image, i) =>
        i === index ? { ...image, [field]: value } : image
      );

      return {
        ...prev,
        props: {
          ...prev.props,
          images: updatedImages,
        },
      };
    });
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
      {Object.keys(componentData.props).map((key) => {
        if (key !== "images") {
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
      {componentData.props.images && (
        <div className="flex flex-col gap-4 w-full">
          <h2>Images</h2>
          {componentData.props.images.map((image, index) => (
            <div key={index} className="flex flex-col gap-2 border p-4 rounded-md">
              <h3>Image {index + 1}</h3>
              <label>Firebase URL</label>
              <input
                type="text"
                value={image.firebaseUrl}
                onChange={(e) => handleImageChange(index, "firebaseUrl", e.target.value)}
              />

              {Object.keys(image.altText).map((lang) => (
                <div key={lang} className="flex flex-col gap-2">
                  <label>Alt Text ({lang})</label>
                  <input
                    type="text"
                    value={image.altText[lang]}
                    onChange={(e) => {
                      const updatedAltText = {
                        ...image.altText,
                        [lang]: e.target.value,
                      };
                      handleImageChange(index, "altText", updatedAltText);
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
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
