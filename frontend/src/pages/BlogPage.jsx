import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import HomeCarousel from "../components/homepage/HomeCarousel";
// import Reservation from "../components/homepage/Reservation";
// import ContactSection from "../components/homepage/ContactSection";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blog/liste");
        const data = await response.json();
        if (data.success) {
          setBlogs(data.blogs);
        } else {
          setError("Bloglar getirilemedi.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <main>
      <div className="flex flex-col w-full pb-4 justify-center items-center">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setLanguage("tr")} className="px-4 py-2 bg-gray-200 rounded">
            Türkçe
          </button>
          <button onClick={() => setLanguage("en")} className="px-4 py-2 bg-gray-200 rounded">
            English
          </button>
          <button onClick={() => setLanguage("ru")} className="px-4 py-2 bg-gray-200 rounded">
            Rusça
          </button>
          <button onClick={() => setLanguage("de")} className="px-4 py-2 bg-gray-200 rounded">
            Almanca
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">Bloglar</h1>

        <div className="flex w-11/12 items-center justify-center">
          <div className="grid grid-cols-4 gap-5 items-center justify-center w-full xl:max-w-[1440px] pb-8">
            {blogs.map((blog) => {
              const blogUrl = blog.urls?.[language] || blog.urls?.tr;
              const sectionsForLang = blog.sections?.[language];

              if (!sectionsForLang || sectionsForLang.length === 0) {
                return (
                  <div
                    key={blog._id}
                    className="w-[350px] h-[324px] flex flex-col text-black p-4 text-center items-center justify-center gap-2"
                  >
                    <p>Bu dil için içerik bulunamadı.</p>
                  </div>
                );
              }

              // Kartın tamamını Link yapmak:
              return (
                <Link 
                  key={blog._id} 
                  to={`/blog/${language}/${blogUrl}`}
                  className="w-[350px] h-[324px] flex flex-col text-black p-4 text-center items-center justify-center gap-2 border"
                >
                  {blog.thumbnail && (
                    <img
                      src={blog.thumbnail}
                      alt={sectionsForLang[0].title}
                      className="mb-4 max-w-[310px] max-h-[142px] object-cover"
                    />
                  )}
                  <h2 className="text-[17px] italic font-bold font-lora mb-2 max-w-[320px] max-h-[14px]">
                    {sectionsForLang[0].title}
                  </h2>
                  <p className="mb-4 text-[13px] font-monserrat font-400 max-w-[280px] max-h-[300px]">
                    {sectionsForLang[0].content.substring(0, 140)}...
                  </p>
                  <div className="text-black text-[14px] font-bold font-monserrat border px-6 py-2">
                    More About
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
