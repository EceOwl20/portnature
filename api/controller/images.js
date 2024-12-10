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



