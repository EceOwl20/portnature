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
    <div className="flex flex-col items-center my-5 gap-7">
      <h2 className="font-monserrat text-[30px] font-medium">Page: {pageDetails.pageName}</h2>
      <ul className="flex flex-col w-[90%] items-center justify-center gap-5">
        {pageDetails.components.map((component, index) => (
          <li key={index}>
            <Link className="font-monserrat text-[20px] font-normal hover:text-[#6b78ad] px-2 py-1 bg-slate-300 border rounded-md" to={`/panel/pages/${pageName}/components/${index}`}>
              {component.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageDetails;
