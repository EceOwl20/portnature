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
      {Object.keys(componentData.props).map((key) => (
        <div key={key} className="flex flex-col gap-2">
          <label>{key}</label>
          <input
            type="text"
            value={componentData.props[key]}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
      {success && <p className="text-green-500">Component updated successfully!</p>}
    </div>
  );
};

export default EditComponent;
