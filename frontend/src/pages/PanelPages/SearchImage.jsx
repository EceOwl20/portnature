import React, { useState } from "react";

const SearchImage = () => {
  const [search, setSearch] = useState({ name: "", lang: "en" });
  const [image, setImage] = useState(null);
  const [wait, setWait] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Açık/Kapalı durumu tersine çevir
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setWait(true);
    setError(null);
    setImage(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/images/search?name=${search.name}&lang=${search.lang}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (!response.ok || !data) {
        setError(data?.message || "Image not found");
        setWait(false);
        return;
      }

      setImage(data);
      setWait(false);
    } catch (err) {
      setError("An unexpected error occurred.");
      setWait(false);
    }
  };

  const handleLanguageSelection = (lang) => {
    setSearch({ ...search, lang }); // Sadece dili güncelle
    setIsOpen(false); // Dropdown'ı kapat
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-auto my-12">
      <div className="flex flex-col  w-[80%] items-start justify-center">
        <h2 className="text-[30px] font-medium font-monserrat text-[#0E0C1B]">Resim Ara</h2>
        <form onSubmit={handleSearch} className="flex w-[80%] items-center justify-start m-4 gap-6 mt-10">
          <input
            className="flex border border-[#0E0C1B] py-1 px-2"
            type="text"
            placeholder="Name"
            value={search.name}
            onChange={(e) => setSearch({ ...search, name: e.target.value })}
            required
          />
          <div className="relative">
            <button
              className="flex items-center justify-between w-full border border-[#0E0C1B] py-1 px-2 bg-[#0E0C1B] text-white text-[15px] rounded"
              onClick={(e) => {
                e.preventDefault(); // Dropdown açmak için form gönderimini engelle
                toggleDropdown();
              }}
            >
              {search.lang === "en"
                ? "English"
                : search.lang === "ru"
                ? "Russian"
                : search.lang === "de"
                ? "German"
                : "Türkçe"}
              <span className="ml-2">▼</span>
            </button>
            {isOpen && (
              <ul className="absolute bg-white border border-[#0E0C1B] w-full z-10">
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageSelection("en")}
                >
                  English
                </li>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageSelection("ru")}
                >
                  Russian
                </li>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageSelection("de")}
                >
                  German
                </li>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageSelection("tr")}
                >
                  Türkçe
                </li>
              </ul>
            )}
          </div>
          <button
            type="submit"
            disabled={wait}
            className=" border text-white hover:text-[#0E0C1B] border-[#0E0C1B] py-[5px] px-[10px] bg-[#0E0C1B] hover:bg-white"
          >
            {wait ? "Searching..." : "Search"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {image && (
          <div className="w-[25%] h-auto flex flex-col">
            <img src={image.firebaseUrl} alt={image.altText[search.lang]} />
            <p>{image.altText[search.lang]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchImage;
