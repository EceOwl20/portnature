// models/images.js
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    de: { type: String, required: true },
    tr: { type: String, required: true },
  },
  altText: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    de: { type: String, required: true },
    tr: { type: String, required: true },
  },
  firebaseUrl: { type: String, required: true },
});

const Image = mongoose.model("Image", imageSchema);
export default Image;