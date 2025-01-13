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
    <div className="container mx-auto px-4 pb-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-white my-5">Sayfa Listesi</h1>
            {pages.length > 0 ? (
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
                        {pages.map((page) => (
                            <tr key={page._id}>
                                <td className="py-2 px-4 border uppercase font-semibold">
                                    {/* {page.sections['tr'][0]?.title || 'Başlık yok'} */} {page.pageName}
                                </td>
                                <td className="py-2 px-4 border">
                                  {/* Her dil için URL gösterimi */}
                                  <div className="flex flex-row gap-3 font-normal">
                                    <span>TR:"{page.urls?.tr || ''}"</span>
                                    <span>EN:"{page.urls?.en || ''}"</span>
                                    <span>RU: "{page.urls?.ru || ''}"</span>
                                    <span>DE: "{page.urls?.de || ''}"</span>
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
                                  <Link to={`/panel/pages/${page.pageName}`}>
                                      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                          Düzenle
                                      </button>
                                  </Link>
                                  <button
                                      onClick={() => deletepage(page._id)}
                                      className="bg-red-500 text-white px-4 py-2 rounded"
                                  >
                                      Sil
                                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-white">Yükleniyor</p>
            )}
        </div>
  );
};

export default PageList;
