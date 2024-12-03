import mongoose from "mongoose";

const sectionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const blogSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    images: [String], // image, image1, image2, image3 alanlarını tek bir diziye dönüştürdük
    gallery: {
      type: [String],
      default: [],
    },
    sections: {
      tr: [sectionSchema], // Türkçe bölümler
      en: [sectionSchema], // İngilizce bölümler
      ru: [sectionSchema],
      de: [sectionSchema],
      // Başka diller eklemek isterseniz buraya ekleyebilirsiniz
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
