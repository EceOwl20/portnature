import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../src/context/LanguageContext";

const BlogDetails = () => {
  const { slug } = useParams(); // URL'deki slug
  const navigate = useNavigate();
  const { language } = useLanguage(); // Dil bilgisi Context'ten alınır

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Backend'den blog verisini çek
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      setBlog(null);

      try {
        const response = await fetch(
          `/api/blog/${slug}` // Backend'e sadece slug ile istek at
        );
        const data = await response.json();

        if (data.success) {
          setBlog(data.blog);
        } else {
          throw new Error(data.message || "Blog not found.");
        }
      } catch (error) {
        setError(error.message || "Unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]); // slug değiştiğinde veriyi yeniden çek

  // Dil değiştiğinde ilgili slug'a yönlendir
  useEffect(() => {
    if (blog && blog.urls) {
      const newSlug = blog.urls[language]; // Yeni dilin slug'ını al
      if (newSlug && newSlug !== slug) {
        navigate(`/blog/${newSlug}`, { replace: true }); // Yeni slug ile yönlendir
      }
    }
  }, [language, blog, slug, navigate]); // language veya blog değiştiğinde çalışır

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>Blog not found.</p>;

  const sections = blog.sections[language] || [];
  const images = blog.images || [];

  return (
    <div className="flex flex-col px-4 pb-4 items-center justify-center">
      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt={sections[0]?.title || "Blog Thumbnail"}
          className="mb-6 w-7/12"
        />
      )}

      {sections.map((section, index) => (
        <div key={section._id || index} className="flex flex-col items-center mb-6">
          {section.title && (
            <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
          )}
          {section.content && <p className="text-lg">{section.content}</p>}
        </div>
      ))}

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Blog Image ${index}`}
          className="mb-6 w-5/12"
        />
      ))}
    </div>
  );
};

export default BlogDetails;
