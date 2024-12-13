import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PageList = () => {
  const [pages, setPages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/page/all");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch pages");
        }

        setPages(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPages();
  }, []);

  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center">
      <h1>Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page._id}>
            <Link to={`/panel/pages/${page.pageName}`}>{page.pageName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
