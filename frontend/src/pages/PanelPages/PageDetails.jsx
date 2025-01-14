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
    <div className="container mx-auto px-4 pb-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-white my-5">page Listesi</h1>
            {pageDetails.components.length > 0 ? (
                <table className="min-w-full bg-white mt-10">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Başlık (TR)</th>
                            <th className="py-2 px-4 border">URL'ler</th>
                            {/* <th className="py-2 px-4 border">Diller</th> */}
                            <th className="py-2 px-4 border">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pageDetails.components.map((component, index) => (
                            <tr key={component._id}>
                                <td className="py-2 px-4 border uppercase font-semibold">
                                    {/* {page.sections['tr'][0]?.title || 'Başlık yok'} */} {component.type}
                                </td>
                                <td className="py-2 px-4 border">
                                  {/* Her dil için URL gösterimi */}
                                  <div className="flex flex-row gap-3 font-normal">
                                    {/* <span>TR:"{component.urls?.tr || ''}"</span>
                                    <span>EN:"{component.urls?.en || ''}"</span>
                                    <span>RU: "{component.urls?.ru || ''}"</span>
                                    <span>DE: "{component.urls?.de || ''}"</span> */}
                                  </div>
                                </td>
                                {/* <td className="py-2 px-4 border">
                                    {['tr', 'en', 'ru', 'de'].map((lang) => (
                                        <span
                                            key={lang}
                                            className={`inline-block px-2 py-1 rounded mr-1 text-sm ${
                                                page.sections[lang]?.length > 0
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                            }`}
                                        >
                                            {lang.toUpperCase()}
                                        </span>
                                    ))}
                                </td> */}
                                <td className="py-2 px-4 border">
                                  <Link to={`/panel/pages/${pageName}/components/${index}`}>
                                      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                          Düzenle
                                      </button>
                                  </Link>
                                  {/* <button
                                      onClick={() => deletepage(component._id)}
                                      className="bg-red-500 text-white px-4 py-2 rounded"
                                  >
                                      Sil
                                  </button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>page bulunamadı.</p>
            )}
        </div>
  );
};

export default PageDetails;
