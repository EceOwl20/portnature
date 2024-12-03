import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/homepage/HomeCarousel";
import Reservation from "../components/homepage/Reservation"
import img1 from "../../public/images/homepage/portnaturehotel1.png"
import img2 from "../../public/images/homepage/portnaturehotel2.jpeg"
import img3 from "../../public/images/homepage/portnaturehotel3.png"


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("tr");
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

      
          <div className="flex w-11/12">
            <div className="grid grid-cols-4 gap-5 w-full ">
                {blogs.map((blog) => (
                  blog.sections[language] && blog.sections[language].length > 0 ? (
                    <div key={blog._id} className="bg-black flex flex-col text-white p-4">
                        {blog.thumbnail && (
                          <img
                            src={blog.thumbnail}
                            alt={blog.sections[language][0].title}
                            className="mb-4 w-full h-32 object-cover"
                          />
                        )}
                      <h2 className="text-xl font-bold mb-2">
                        {blog.sections[language][0].title}
                      </h2>
                      <p className="mb-4">
                        {blog.sections[language][0].content.substring(0, 50)}...
                      </p>
                      <Link
                        to={`/blog/${blog._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        Devamını Oku
                      </Link>
                    </div>
                  ) : (
                    <div key={blog._id} className="w-3/12 p-4">
                      <p>Bu dil için içerik bulunamadı.</p>
                    </div>
                  )
                ))}
              </div>
          </div>
        </div>
    </main>
  );
};

export default BlogPage;
