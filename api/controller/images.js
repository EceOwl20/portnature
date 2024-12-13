//yükleme listeleme silme
//galeri mi bilgisayar mı
// controllers/imageController.js
import Image from "../models/images.js"

// Resim kaydetme
export const uploadImage = async (req, res) => {
  try {
    const { name, altText, firebaseUrl } = req.body;

    const newImage = new Image({ name, altText, firebaseUrl });
    await newImage.save(); 

    res.status(201).json({ message: "Image saved successfully!", newImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving image", error });
  }
};

// İsme göre resim arama
export const searchImageByName = async (req, res) => {
  try {
    const { name, lang } = req.query; // İsme ve dile göre arama
    const image = await Image.findOne({ [`name.${lang}`]: name });

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching image", error });
  }
};

export const getImagesByName = async (req, res) => {
  try {
    const { names, lang } = req.query; // names virgülle ayrılmış isimler
    if (!names || !lang) {
      return res.status(400).json({ message: "Names and lang are required" });
    }

    const nameArray = names.split(","); // İsimleri virgüle göre ayır
    const images = await Image.find({
      [`name.${lang}`]: { $in: nameArray }, // name.[lang] alanına göre sorgula
    });

    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    res.status(200).json(images); // Resimleri döndür
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Error fetching images", error });
  }
};


export const getAllImages = async (req, res) => {
  try {
    const images = await Image.find(); // Tüm resimleri getir
    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching all images:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    // MongoDB'den resmi bul
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // // Firebase Storage'dan resmi sil
    // const storage = getStorage(app);
    // const imageRef = ref(storage, image.firebaseUrl); // firebaseUrl burada tam dosya yolunu içermeli
    // await deleteObject(imageRef);

    // MongoDB'den resmi sil
    await Image.findByIdAndDelete(id);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, altText, firebaseUrl } = req.body;

    if (
      !name ||
      !altText ||
      !firebaseUrl ||
      !name.en ||
      !name.tr ||
      !name.ru ||
      !name.de ||
      !altText.en ||
      !altText.tr ||
      !altText.ru ||
      !altText.de
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required, including firebaseUrl" });
    }

    const updatedImage = await Image.findByIdAndUpdate(
      id,
      { name, altText, firebaseUrl },
      { new: true, runValidators: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json(updatedImage);
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const getImageById = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Image.findById(id); // ID ile resim arayın
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json(image); // Resmi JSON olarak döndür
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateImageName = async (req, res) => {
  try {
    const { oldName, newName } = req.body;

    if (!oldName || !newName) {
      return res.status(400).json({ message: "Old name and new name are required" });
    }

    const updatedImage = await Image.findOneAndUpdate(
      { "name.en": oldName }, // İngilizce isim üzerinden buluyoruz
      { $set: { "name.en": newName } }, // Yeni ismi güncelliyoruz
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json(updatedImage);
  } catch (error) {
    console.error("Error updating image name:", error);
    res.status(500).json({ message: "Error updating image name", error });
  }
};


export const getImagesByPage = async (req, res) => {
  try {
    const { page } = req.query;

    const images = await Image.find({ page }); // Sayfa adıyla ilişkilendirilmiş resimleri bulur

    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Error fetching images", error });
  }
};
