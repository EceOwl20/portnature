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
    <div className="flex flex-col items-center justify-center gap-7 my-5 z-50">
      <h2 className="font-monserrat text-[30px] font-medium">Pages</h2>
      <ul className="flex flex-col w-[90%] items-start justify-center gap-5">
        {pages.map((page) => (
          <li key={page._id}>
            <Link className="font-monserrat text-[20px] font-normal hover:text-[#6b78ad] px-2 py-1 bg-slate-300 border rounded-md" to={`/panel/pages/${page.pageName}`}>{page.pageName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
