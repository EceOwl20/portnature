import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/homepage/HomeCarousel";
import Reservation from "../components/homepage/Reservation"
import img1 from "../../public/images/homepage/portnaturehotel1.png"
import img2 from "../../public/images/homepage/portnaturehotel2.jpeg"
import img3 from "../../public/images/homepage/portnaturehotel3.png"
import ContactSection from "../components/homepage/ContactSection";


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const images =[img1,img2,img3];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog/liste");
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
          <HomeCarousel  images={images}/>
          <Reservation />
        <div className=" flex flex-col w-full pb-4 justify-center items-center">
            <button onClick={() => setLanguage("tr")}>Türkçe</button>
            <button onClick={() => setLanguage("en")}>English</button>
            <button onClick={() => setLanguage("ru")}>Rusça</button>
            <button onClick={() => setLanguage("de")}>Almanca</button>
            <h1>Bloglar</h1>

      
          <div className="flex w-11/12 items-center justify-center">
            <div className="grid grid-cols-4 gap-5 items-center justify-center w-full xl:max-w-[1440px] pb-8">
                {blogs.map((blog) => (
                  blog.sections[language] && blog.sections[language].length > 0 ? (
                    <Link to={`/blog/${blog.url}`}>
                        <div key={blog._id} className="w-[350px] h-[324px] flex flex-col text-black  p-4 text-center items-center justify-center gap-2">
                        {blog.thumbnail && (
                          <img
                            src={blog.thumbnail}
                            alt={blog.sections[language][0].title}
                            className="mb-4 max-w-[310px] max-h-[142px] object-cover"
                          />
                        )}
                      <h2 className="text-[17px] italic font-bold font-lora mb-2 max-w-[320px] max-h-[14px]">
                        {blog.sections[language][0].title}
                      </h2>
                      <p className="mb-4 text-[13px] font-monserrat font-400 max-w-[280px] max-h-[300px]">
                        {blog.sections[language][0].content.substring(0, 140)}...
                      </p>
                      <Link
                        to={`/blog/${blog.url}`}
                        className="text-black text-[14px] font-bold font-monserrat border px-6 py-2"
                      >
                        More About
                      </Link>
                    </div>
                    </Link>
                    
                  ) : (
                    <div key={blog._id} className="w-3/12 p-4">
                      <p>Bu dil için içerik bulunamadı.</p>
                    </div>
                  )
                  
                ))}
              </div>
          </div>
        </div>
        <ContactSection />
    </main>
  );
};


export default BlogPage;
