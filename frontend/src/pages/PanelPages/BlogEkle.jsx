import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase.js";

const BlogEkle = () => {
  const { activeUser } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    urls: { tr: "", en: "", ru: "", de: "" },
    author: activeUser._id,
    thumbnail: "",
    images: [],
    sections: {
      tr: [],
      en: [],
      ru: [],
      de: [],
    },
  });

  const [error, setError] = useState(false);
  const [wait, setWait] = useState(false);
  const [success, setSuccess] = useState(false);
  const [thumbnail, setThumbnail] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [progressBar, setProgressBar] = useState(0);

  // Slug oluşturma fonksiyonu
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

  // Dil bazlı URL güncelleme effect
  useEffect(() => {
    const newUrls = { ...form.urls };
    const languages = ["tr", "en", "ru", "de"];

    languages.forEach((lang) => {
      if (form.sections[lang].length > 0 && form.sections[lang][0].title) {
        newUrls[lang] = generateSlug(form.sections[lang][0].title);
      }
    });

    setForm((prevForm) => ({ ...prevForm, urls: newUrls }));
    // form.sections değiştiğinde çalışır
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.sections]);

  useEffect(() => {
    if (thumbnail) {
      handleUploadThumbnail(thumbnail);
    }
  }, [thumbnail]);

  const handleUploadThumbnail = (image) => {
    setWait(true);

    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadImage = uploadBytesResumable(storageRef, image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressBar(Math.round(progress));
      },
      (error) => {
        setImageError(error.message || "Resim yükleme hatası");
        setWait(false);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
          setForm((prevForm) => ({
            ...prevForm,
            thumbnail: downloadURL,
          }));
          setWait(false);
        });
      }
    );
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    // urls.tr, urls.en gibi alanlar yok, url alanı yok artık
    // Eğer URL alanlarını manuel değiştirmek isterseniz burada kontrol edebilirsiniz
    // Ancak biz otomatik oluşturuyoruz diye varsayıyorum, bu yüzden urls için input kullanmıyoruz.
    setForm({
      ...form,
      [name]: value,
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

  const handleImagesUpload = (e) => {
    setWait(true);
    const files = e.target.files;
    const storage = getStorage(app);
    const uploadPromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      const uploadPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressBar(Math.round(progress));
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });

      uploadPromises.push(uploadPromise);
    }

    Promise.all(uploadPromises)
      .then((downloadURLs) => {
        setForm((prevForm) => ({
          ...prevForm,
          images: [...prevForm.images, ...downloadURLs],
        }));
        setWait(false);
      })
      .catch((error) => {
        setImageError(error.message || "Resim yükleme hatası");
        setWait(false);
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setWait(true);

    try {
      const response = await fetch("http://localhost:3000/api/blog/yeni", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (data.success === false) {
        setError(data.message || "Bir hata oluştu.");
        setWait(false);
        return;
      }

      setSuccess("Veri Başarılı Bir Şekilde Yüklendi");
      console.log("Veri Kaydedildi", data);
      setWait(false);
    } catch (error) {
      setError(error.message || "Bir hata oluştu.");
      setWait(false);
    }
  };

  return (
    <section className="flex pl-4 pt-4 ">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4 p-4 rounded-xl w-1/4 bg-gray-500"
      >
        
        {form.thumbnail && <img src={form.thumbnail} alt="Thumbnail" />}
        <p>
          {progressBar > 0 && progressBar < 100
            ? progressBar
            : progressBar === 100 && "Yüklendi"}
        </p>
        <input
          type="file"
          name="thumbnail"
          accept="image/*"
          className="rounded-sm"
          onChange={(e) => setThumbnail(e.target.files[0])}
          disabled={wait}
        />

        {/* Burada tek bir URL yerine her dil için ayrı URL gösterimi yapabiliriz */}
        <div className="bg-white p-2 rounded">
          <h4 className="font-bold">Oluşan URL'ler:</h4>
          <p>Türkçe: {form.urls.tr}</p>
          <p>İngilizce: {form.urls.en}</p>
          <p>Rusça: {form.urls.ru}</p>
          <p>Almanca: {form.urls.de}</p>
        </div>

        
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImagesUpload}
          disabled={wait}
        />

        {/* Türkçe */}
        <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm">
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
        <div className="flex items-center justify-center w-full">
            <button
                type="button"
                className="text-white bg-black flex p-1 rounded-md cursor-pointer"
                onClick={() => handleAddSection("tr")}
                disabled={wait}
            >
                Türkçe Bölüm Ekle
            </button>
        </div>

        {/* İngilizce */}
        <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm">
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
        <div className="flex items-center justify-center w-full">
            <button
            type="button"
            className="text-white bg-black flex p-1 rounded-md cursor-pointer"
            onClick={() => handleAddSection("en")}
            disabled={wait}
            >
            İngilizce Bölüm Ekle
            </button>
        </div>

        {/* Rusça */}
        <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm">
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
        <div className="flex items-center justify-center w-full">
            <button
            type="button"
            className="text-white bg-black flex p-1 rounded-md cursor-pointer"
            onClick={() => handleAddSection("ru")}
            disabled={wait}
            >
            Rusça Bölüm Ekle
            </button>
        </div>

        {/* Almanca */}
        <div className="flex bg-white justify-center items-center font-bold font-monserrat w-full rounded-sm">
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
        <div className="flex items-center justify-center w-full">
            <button
            type="button"
            className="text-white bg-black flex p-1 rounded-md cursor-pointer"
            onClick={() => handleAddSection("de")}
            disabled={wait}
            >
            Almanca Bölüm Ekle
            </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-black text-white flex w-2/4 justify-center rounded-sm py-1"
            disabled={wait}
          >
            {wait ? "Bekleyin..." : "Kaydet"}
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </section>
  );
};

export default BlogEkle;
