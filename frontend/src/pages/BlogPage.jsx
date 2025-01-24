import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../src/context/LanguageContext";
import HomeCarousel from "../components/homepage/HomeCarousel";
import ContactSection from "../components/homepage/ContactSection";

const BlogPage = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [contactSectionData, setContactSectionData] = useState(null);

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language: lang } = useLanguage(); // Aktif dil bilgisi

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog/liste"); // Blog listesini getir
        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs); // Blogları state'e kaydet
        } else {
          setError("Bloglar getirilemedi.");
        }

        const response2 = await fetch("/api/page/homepage");
        const data2 = await response2.json();
  
        if (!response2.ok) {
          throw new Error(data2.message || "Failed to fetch page data2");
        }
  
        // Dil bazında transactions verisini al
        const localizedComponents = data2.translations[lang];
  
        if (!localizedComponents) {
          throw new Error(`No translations found for language: ${lang}`);
        }
  
        // Carousel verilerini çek
        const carouselComponent = localizedComponents.find(
          (comp) => comp.type === "Carousel"
        );
  
        if (carouselComponent) {
          setCarouselData(carouselComponent.props);
        } else {
          console.warn("Carousel data2 not found ");
        }

         // ContactSection verilerini çek
         const contactSectionComponent = localizedComponents.find(
          (comp) => comp.type === "ContactSection"
        );
  
        if (contactSectionComponent) {
          setContactSectionData(contactSectionComponent.props);
        } else {
          console.warn("ContactSection data not found");
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
  if (!carouselData && !contactSectionData) return <p>Loading...</p>;

  return (
    <main>
      <div className="flex flex-col w-full pb-4 justify-center items-center">
        <HomeCarousel {...carouselData}/>
        <h1 className="text-2xl font-bold mb-4">Bloglar</h1>

        <div className="flex w-11/12 items-center justify-center">
          <div className="grid grid-cols-4 gap-5 items-center justify-center w-full xl:max-w-[1440px] pb-8">
            {blogs.map((blog) => {
              const blogUrl = blog.urls?.[lang] || blog.urls?.tr; // Dil slug'ını belirle
              const sectionsForLang = blog.sections?.[lang]; // Dil içeriklerini belirle

              if (!sectionsForLang || sectionsForLang.length === 0) {
                return (
                  <div
                    key={blog._id}
                    className="w-[350px] h-[324px] flex flex-col text-black p-4 text-center items-center justify-center gap-2 border"
                  >
                    <p>Bu dil için içerik bulunamadı.</p>
                  </div>
                );
              }

              // Kartın tamamını Link yapmak:
              return (
                <Link 
                  key={blog._id} 
                  to={`/blog/${blogUrl}`} // Doğru slug ile Link oluştur
                  className="w-[350px] h-[324px] flex flex-col text-black p-4 text-center items-center justify-center gap-2 border"
                >
                  {blog.thumbnail && (
                    <img
                      src={blog.thumbnail}
                      alt={sectionsForLang[0].title || "Blog Thumbnail"}
                      className="mb-4 max-w-[310px] max-h-[142px] object-cover"
                    />
                  )}
                  <h2 className="text-[17px] italic font-bold font-lora mb-2 max-w-[320px]">
                    {sectionsForLang[0].title}
                  </h2>
                  <p className="mb-4 text-[13px] font-monserrat font-400 max-w-[280px]">
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
        <ContactSection {...contactSectionData}/>
      </div>
    </main>
  );
};

export default BlogPage;
