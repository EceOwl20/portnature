import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditImage = () => {
  const { id } = useParams(); // URL'den resim ID'sini al
  const navigate = useNavigate(); // İşlem sonrası yönlendirme için
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: { en: "", ru: "", de: "", tr: "" },
    altText: { en: "", ru: "", de: "", tr: "" },
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/images/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch image");
        }

        setImage(data);
        setFormData({
          name: data.name,
          altText: data.altText,
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImage();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    setFormData((prev) => ({
      ...prev,
      [dataset.lang]: { ...prev[dataset.lang], [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`http://localhost:3000/api/images/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update image");
      }

      setSuccess(true);
      alert("Image updated successfully!");
      navigate("/panel/gallery"); // Galeriye yönlendir
    } catch (err) {
      setError(err.message);
    }
  };

  if (!image) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-[40%] gap-5 bg-slate-500 min-h-[400px]"
      >
        <img src={image.firebaseUrl} alt="Current" className="w-full h-auto" />
        {["en", "ru", "de", "tr"].map((lang) => (
          <div key={lang} className="flex flex-col w-full">
            <label>{`Name (${lang})`}</label>
            <input
              type="text"
              name="name"
              placeholder={`Name (${lang})`}
              data-lang={lang}
              value={formData.name[lang]}
              onChange={handleInputChange}
              required
              className="border py-2 px-3"
            />
            <label>{`Alt Text (${lang})`}</label>
            <input
              type="text"
              name="altText"
              placeholder={`Alt Text (${lang})`}
              data-lang={lang}
              value={formData.altText[lang]}
              onChange={handleInputChange}
              required
              className="border py-2 px-3"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded"
        >
          Update
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Update successful!</p>}
      </form>
    </div>
  );
};

export default EditImage;
