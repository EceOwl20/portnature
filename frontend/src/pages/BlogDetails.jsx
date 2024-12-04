import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { url } = useParams();
  const [blog, setBlog] = useState(null);
  const [language, setLanguage] = useState("en"); // Varsayılan dil "en"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("İstek Yapılan URL:", `/api/blog/getir/${url}`);
        const response = await fetch(`/api/blog/getir/${url}`);
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

    fetchBlog();
  }, [url]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!blog) return <p>Blog bulunamadı.</p>;

  // Bölümleri ve resimleri birleştir
  const sections = blog.sections[language] || [];
  const images = blog.images || [];

  // Bölümlere order ekle
  const sectionsWithOrder = sections.map((section, index) => ({
    ...section,
    type: "section",
    order: index * 2, // Her bölüm için order 0, 2, 4, 6...
  }));

  // Resimlere order ekle ve aralara yerleştir
  const imagesWithOrder = images.map((image, index) => ({
    src: image,
    type: "image",
    order: index * 10 + 5, // Resimler için order 1, 3, 5, 7...
  }));

  // Bölümleri ve resimleri birleştir
  const combinedContent = [...sectionsWithOrder, ...imagesWithOrder];

  // Order'a göre sırala
  combinedContent.sort((a, b) => a.order - b.order);

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
          alt={sections[0]?.title || "Blog Thumbnail"}
          className="mb-6 w-full h-64 object-cover"
        />
      )}

      {combinedContent.length > 0 ? (
        combinedContent.map((item, index) => {
          if (item.type === "section") {
            // Başlık seviyesini belirleme
            let headingLevel;
            if (index >= 0 && index <= 0) {
              headingLevel = 1;
            } else if (index >= 1 && index <= 4) {
              headingLevel = 2;
            } else if (index >= 5 && index <= 9) {
              headingLevel = 3;
            } else if (index >= 10 && index <= 13) {
              headingLevel = 4;
            } else {
              headingLevel = 5;
            }

            const HeadingTag = `h${headingLevel}`;

            return (
              <div key={item._id || `section-${index}`} className="mb-6">
                {item.title && (
                  <HeadingTag className="font-bold mb-2">
                    {item.title}
                  </HeadingTag>
                )}
                {item.content && <p className="text-lg">{item.content}</p>}
              </div>
            );
          } else if (item.type === "image") {
            return (
              <div key={`image-${index}`} className="mb-6">
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
