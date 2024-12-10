// GaleriPage.jsx
import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll } from "firebase/storage";
import { getApp } from "firebase/app";

const GaleriPage = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [wait, setWait] = useState(false);

  const app = getApp();
  const storage = getStorage(app);

  // Storage'dan resimleri çekme fonksiyonu
  const fetchGalleryImages = async () => {
    const galleryRef = ref(storage, 'images/');
    const listResult = await listAll(galleryRef);
    const urls = [];

    // Her dosya için URL al
    for (const itemRef of listResult.items) {
      const url = await getDownloadURL(itemRef);
      // fileName'i itemRef.name üzerinden alabilirsiniz
      urls.push({ url, fileName: itemRef.name });
    }

    return urls;
  };

  useEffect(() => {
    // Sayfa yüklendiğinde mevcut resimleri Storage'dan çek
    fetchGalleryImages().then((fetchedImages) => {
      setImages(fetchedImages);
    }).catch((error) => {
      console.error("Resimler alınamadı:", error);
    });
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setWait(true);
    try {
      const fileName = Date.now() + file.name;
      const storageRef = ref(storage, "images/");
      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Yükleme ilerlemesini takip edebilirsiniz
          },
          (error) => reject(error),
          () => resolve()
        );
      });

      const downloadURL = await getDownloadURL(storageRef);
      
      // Yeni resmi images state'ine ekle
      setImages((prev) => [{ url: downloadURL, fileName }, ...prev]);
      setFile(null);
    } catch (error) {
      console.error("Yükleme Hatası:", error);
    } finally {
      setWait(false);
    }
  };

  const handleDelete = async (fileName) => {
    setWait(true);
    try {
      const fileRef = ref(storage, `gallery/${fileName}`);

      // Storage'dan sil
      await deleteObject(fileRef);

      // images state'ini güncelle
      setImages((prev) => prev.filter((img) => img.fileName !== fileName));
    } catch (error) {
      console.error("Silme Hatası:", error);
    } finally {
      setWait(false);
    }
  };

  return (
    <div className="p-4">
      <h1>Galeri</h1>
      <div className="flex items-center gap-2 my-4">
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={wait} />
        <button onClick={handleUpload} disabled={wait || !file}>
          Yükle
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={img.fileName || index} className="border p-2 flex flex-col items-center">
            <img src={img.url} alt={`Image ${index}`} className="w-full" />
            <button 
              onClick={() => handleDelete(img.fileName)} 
              disabled={wait}
              className="mt-2 text-red-500"
            >
              Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriPage;
