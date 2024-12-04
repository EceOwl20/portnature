import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { url } = useParams();
  const [blog, setBlog] = useState(null);
  const [language, setLanguage] = useState("tr");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`api/blog/getir/${url}`);
        const data = await response.json();
        if (data.success) {
          setBlog(data.blog);
        } else {
          setError("Blog bulunamadı.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [url]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!blog) return <p>Blog bulunamadı.</p>;

  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="flex justify-center mb-4">
        <button onClick={() => setLanguage("tr")} className="mx-2">
          Türkçe
        </button>
        <button onClick={() => setLanguage("en")} className="mx-2">
          English
        </button>
        <button onClick={() => setLanguage("ru")} className="mx-2">
          Русский
        </button>
        <button onClick={() => setLanguage("de")} className="mx-2">
          Deutsch
        </button>
      </div>

      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt={blog.sections[language][0]?.title || "Blog Thumbnail"}
          className="mb-6 w-full h-64 object-cover"
        />
      )}

      {blog.sections[language] && blog.sections[language].length > 0 ? (
        blog.sections[language].map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <p className="text-lg">{section.content}</p>
          </div>
        ))
      ) : (
        <p>Bu dil için içerik bulunamadı.</p>
      )}

      {blog.images && blog.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {blog.images.map((image, index) => (
            <img key={index} src={image} alt={`Blog Image ${index + 1}`} className="w-full h-48 object-cover" />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
