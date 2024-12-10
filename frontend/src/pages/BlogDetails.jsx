import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { lang, slug } = useParams(); 
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [language, setLanguage] = useState(lang || "tr"); // Varsayılan olarak URL'deki lang kullanılır, yoksa "tr"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dil veya slug değiştiğinde URL'yi güncelle
  useEffect(() => {
    if (language && slug) {
      // URL'de dil veya slug değiştiğinde tekrar yönlendir
      navigate(`/blog/${language}/${slug}`, { replace: true });
    }
  }, [language, slug, navigate]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("İstek Yapılan URL:", `http://localhost:3000/api/blog/getir/${lang}/${slug}`);
        const response = await fetch(`http://localhost:3000/api/blog/getir/${lang}/${slug}`);
        const data = await response.json();
        if (data.success) {
          setBlog(data.blog);
        } else {
          setError(data.message || "Blog bulunamadı.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // lang ve slug tanımlıysa isteği at
    if (lang && slug) {
      fetchBlog();
    }
  }, [lang, slug]);

  useEffect(() => {
    if (blog && blog.urls && blog.urls[language]) {
      const newSlug = blog.urls[language];
      // Eğer mevcut slug ile yeni slug farklı ise navigate yap
      if (newSlug && newSlug !== slug) {
        navigate(`/blog/${language}/${newSlug}`, { replace: true });
      }
    }
  }, [language, blog, slug, navigate]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!blog) return <p>Blog bulunamadı.</p>;

  const sections = blog.sections[language] || [];
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
      <div className="flex justify-center mb-4">
        <button onClick={() => setLanguage("tr")} className="mx-2">Türkçe</button>
        <button onClick={() => setLanguage("en")} className="mx-2">English</button>
        <button onClick={() => setLanguage("ru")} className="mx-2">Русский</button>
        <button onClick={() => setLanguage("de")} className="mx-2">Deutsch</button>
      </div>

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
            let headingLevel;
            if (index <= 0) {
              headingLevel = 1;
            } else if (index <= 4) {
              headingLevel = 2;
            } else if (index <= 9) {
              headingLevel = 3;
            } else if (index <= 13) {
              headingLevel = 4;
            } else {
              headingLevel = 5;
            }

            const HeadingTag = `h${headingLevel}`;

            return (
              <div key={item._id || `section-${index}`} className="flex flex-col items-center gap-7 w-7/12 mb-6">
                {item.title && (
                  <HeadingTag className="mb-2 text-[40px] font-lora font-medium">
                    {item.title}
                  </HeadingTag>
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
