import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PageDetails = () => {
  const { pageName } = useParams();
  const [pageDetails, setPageDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageDetails = async () => {
      try {
        const response = await fetch(`/api/page/${pageName}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch page details");
        }

        setPageDetails(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageDetails();
  }, [pageName]);

  if (error) return <p>Error: {error}</p>;
  if (!pageDetails) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center">
      <h1>Page: {pageDetails.pageName}</h1>
      <ul>
        {pageDetails.components.map((component, index) => (
          <li key={index}>
            <Link to={`/panel/pages/${pageName}/components/${index}`}>
              {component.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageDetails;
