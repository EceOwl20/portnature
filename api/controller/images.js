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
    const { names, lang } = req.query; // `names` virgülle ayrılmış isimler
    const nameArray = names.split(",");

    const images = await Image.find({
      [`name.${lang}`]: { $in: nameArray },
    });

    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    res.status(200).json(images);
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


