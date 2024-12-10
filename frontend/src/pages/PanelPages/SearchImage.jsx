import React, { useState } from "react";

const SearchImage = () => {
  const [search, setSearch] = useState({ name: "", lang: "en" });
  const [image, setImage] = useState(null);
  const [wait, setWait] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setWait(true);
    setError(null);
    setImage(null);

    try {
      const response = await fetch(
        `/api/images/search?name=${search.name}&lang=${search.lang}`,
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
          onChange={(e) =>
            setSearch({ ...search, name: e.target.value })
          }
          required
        />
        <select
        className="flex border border-[#0E0C1B] py-1 px-2"
          value={search.lang}
          onChange={(e) =>
            setSearch({ ...search, lang: e.target.value })
          }
        >
          <option className="text-[15px] py-1 px-2" value="en">English</option>
          <option className="text-[15px] py-1 px-2" value="ru">Russian</option>
          <option className="text-[15px] py-1 px-2" value="de">German</option>
          <option className="text-[15px] py-1 px-2" value="tr">Türkçe</option>
        </select>
        <button type="submit" disabled={wait} className=" border text-white hover:text-[#0E0C1B] border-[#0E0C1B] py-[5px] px-[10px] bg-[#0E0C1B] hover:bg-white">
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
