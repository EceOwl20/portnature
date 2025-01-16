import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../src/context/LanguageContext";

const BlogDetails = () => {
  const { slug } = useParams(); // URL'deki slug
  const navigate = useNavigate();
  const { language: lang } = useLanguage(); // Context'teki dil

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true); // Yükleme durumunu başlat
      setError(null); // Hataları sıfırla
      setBlog(null); // Blog içeriğini sıfırla
  
      try {
        const response = await fetch(`http://localhost:3000/api/blog/getir/${lang}/${slug}`);
        const data = await response.json();
  
        if (data.success) {
          setBlog(data.blog);
        } else {
          throw new Error(data.message || "Blog bulunamadı.");
        }
      } catch (error) {
        setError(error.message || "Beklenmeyen bir hata oluştu.");
      } finally {
        setLoading(false); // Yükleme durumunu kapat
      }
    };
  
    // Eğer lang ve slug mevcutsa veriyi çek
    if (lang && slug) {
      fetchBlog();
    }
  }, [lang, slug]); // lang veya slug değiştiğinde çalışır
  
  useEffect(() => {
    if (blog && blog.urls && blog.urls[lang]) {
      const newSlug = blog.urls[lang];
      if (newSlug && (newSlug !== slug || blog.lang !== lang)) {
        navigate(`/blog/${lang}/${newSlug}`, { replace: true });
      }
    }
  }, [lang, blog, slug, navigate]);
  
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setBlog(null);
  
      try {
        const response = await fetch(`http://localhost:3000/api/blog/getir/${lang}/${slug}`);
        const data = await response.json();
  
        if (data.success) {
          setBlog(data.blog);
        } else {
          setError(data.message || "Blog bulunamadı.");
        }
      } catch (error) {
        setError(error.message || "Beklenmeyen bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlog();
  }, [lang, slug]); // Dil veya slug değiştiğinde yeni veriyi çek
  
  
  

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!blog) return <p>Blog bulunamadı.</p>;

  const sections = blog.sections[lang] || [];
  const images = blog.images || [];

  const sectionsWithOrder = sections.map((section, index) => ({
    ...section,
    type: "section",
    order: index * 2,
  }));

  const imagesWithOrder = images.map((image, index) => ({
    src: image,
    type: "image",
    order: index * 10 + 5,
  }));

  const combinedContent = [...sectionsWithOrder, ...imagesWithOrder];
  combinedContent.sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col px-4 pb-4 items-center justify-center">
      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt={sections[0]?.title || "Blog Thumbnail"}
          className="mb-6 w-7/12"
        />
      )}

      {combinedContent.length > 0 ? (
        combinedContent.map((item, index) => {
          if (item.type === "section") {
            return (
              <div key={item._id || `section-${index}`} className="flex flex-col items-center gap-7 w-7/12 mb-6">
                {item.title && (
                  <h2 className="mb-2 text-[40px] font-lora font-medium">
                    {item.title}
                  </h2>
                )}
                {item.content && <p className="text-[14px] font-monserrat">{item.content}</p>}
              </div>
            );
          } else if (item.type === "image") {
            return (
              <div key={`image-${index}`} className="w-5/12 mb-6">
                <img
                  src={item.src}
                  alt={`Blog Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>Bu dil için içerik bulunamadı.</p>
      )}
    </div>
  );
};

export default BlogDetails;
