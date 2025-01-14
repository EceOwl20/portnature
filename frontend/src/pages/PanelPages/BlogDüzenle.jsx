import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDüzenle = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    urls: { tr: "", en: "", ru: "", de: "" },
    author: "",
    thumbnail: "",
    images: [],
    sections: {
      tr: [],
      en: [],
      ru: [],
      de: [],
    },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wait, setWait] = useState(false);
  const [success, setSuccess] = useState(false);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Blog verisini çek
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/blog/getir/${id}`);
        const data = await response.json();
        if (data.success) {
          setForm(data.blog);
        } else {
          setError(data.message || "Blog verisi alınamadı.");
        }
      } catch (err) {
        setError(err.message || "Bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // sections değiştiğinde urls'i güncelle
  useEffect(() => {
    const newUrls = { ...form.urls };
    const languages = ["tr", "en", "ru", "de"];

    languages.forEach((lang) => {
      if (form.sections[lang].length > 0 && form.sections[lang][0].title) {
        newUrls[lang] = generateSlug(form.sections[lang][0].title);
      }
    });

    setForm((prevForm) => ({ ...prevForm, urls: newUrls }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.sections]);

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSectionChange = (language, index, field, value) => {
    setForm((prevForm) => {
      const updatedSections = prevForm.sections[language].map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      );
      return {
        ...prevForm,
        sections: {
          ...prevForm.sections,
          [language]: updatedSections,
        },
      };
    });
  };

  const handleAddSection = (language) => {
    setForm((prevForm) => ({
      ...prevForm,
      sections: {
        ...prevForm.sections,
        [language]: [...prevForm.sections[language], { title: "", content: "" }],
      },
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setWait(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`/api/blog/guncelle/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (data.success) {
        setSuccess(data.message || "Blog başarıyla güncellendi.");
      } else {
        setError(data.message || "Güncelleme başarısız oldu.");
      }
    } catch (err) {
      setError(err.message || "Bir hata oluştu.");
    } finally {
      setWait(false);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-4 p-4 rounded-xl w-1/4 bg-gray-500">
      <h1 className="text-xl font-bold">Blog Düzenle</h1>
      
      {form.thumbnail && <img src={form.thumbnail} alt="Thumbnail" />}

      <div className="bg-white p-2 rounded">
        <h4 className="font-bold">Oluşan URL'ler:</h4>
        <p>Türkçe: {form.urls.tr}</p>
        <p>İngilizce: {form.urls.en}</p>
        <p>Rusça: {form.urls.ru}</p>
        <p>Almanca: {form.urls.de}</p>
      </div>

      {/* Türkçe Bölümleri */}
      <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm mt-4">
        <h3 className=" items-center flex">Türkçe</h3>
      </div>
      {form.sections.tr.map((section, index) => (
        <div key={index} className="flex flex-col gap-2">
          <input
            type="text"
            className="rounded-sm"
            placeholder="Başlık"
            value={section.title}
            onChange={(e) =>
              handleSectionChange("tr", index, "title", e.target.value)
            }
          />
          <textarea
            placeholder="İçerik"
            className="rounded-sm"
            value={section.content}
            onChange={(e) =>
              handleSectionChange("tr", index, "content", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="text-white bg-black flex p-1 rounded-md cursor-pointer"
        onClick={() => handleAddSection("tr")}
        disabled={wait}
      >
        Türkçe Bölüm Ekle
      </button>

      {/* İngilizce Bölümleri */}
      <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm mt-4">
        <h3>İngilizce</h3>
      </div>
      {form.sections.en.map((section, index) => (
        <div key={index} className="flex flex-col gap-2">
          <input
            type="text"
            className="rounded-sm"
            placeholder="Title"
            value={section.title}
            onChange={(e) =>
              handleSectionChange("en", index, "title", e.target.value)
            }
          />
          <textarea
            placeholder="Content"
            className="rounded-sm"
            value={section.content}
            onChange={(e) =>
              handleSectionChange("en", index, "content", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="text-white bg-black flex p-1 rounded-md cursor-pointer"
        onClick={() => handleAddSection("en")}
        disabled={wait}
      >
        İngilizce Bölüm Ekle
      </button>

      {/* Rusça Bölümleri */}
      <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm mt-4">
        <h3>Rusça</h3>
      </div>
      {form.sections.ru.map((section, index) => (
        <div key={index} className="flex flex-col gap-2">
          <input
            type="text"
            className="rounded-sm"
            placeholder="Title"
            value={section.title}
            onChange={(e) =>
              handleSectionChange("ru", index, "title", e.target.value)
            }
          />
          <textarea
            placeholder="Content"
            className="rounded-sm"
            value={section.content}
            onChange={(e) =>
              handleSectionChange("ru", index, "content", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="text-white bg-black flex p-1 rounded-md cursor-pointer"
        onClick={() => handleAddSection("ru")}
        disabled={wait}
      >
        Rusça Bölüm Ekle
      </button>

      {/* Almanca Bölümleri */}
      <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm mt-4">
        <h3>Almanca</h3>
      </div>
      {form.sections.de.map((section, index) => (
        <div key={index} className="flex flex-col gap-2">
          <input
            type="text"
            className="rounded-sm"
            placeholder="Title"
            value={section.title}
            onChange={(e) =>
              handleSectionChange("de", index, "title", e.target.value)
            }
          />
          <textarea
            placeholder="Content"
            className="rounded-sm"
            value={section.content}
            onChange={(e) =>
              handleSectionChange("de", index, "content", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        className="text-white bg-black flex p-1 rounded-md cursor-pointer"
        onClick={() => handleAddSection("de")}
        disabled={wait}
      >
        Almanca Bölüm Ekle
      </button>

      <div className="flex items-center justify-center mt-4">
        <button
          type="submit"
          className="bg-black text-white flex w-2/4 justify-center rounded-sm py-1"
          disabled={wait}
        >
          {wait ? "Bekleyin..." : "Güncelle"}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default BlogDüzenle;
