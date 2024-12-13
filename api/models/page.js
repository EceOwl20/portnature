import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Component adı
  props: { type: mongoose.Schema.Types.Mixed, required: true }, // Props
});

const pageSchema = new mongoose.Schema({
  pageName: { type: String, required: true, unique: true }, // Sayfa adı
  components: [componentSchema], // Dinamik bileşenler
});

const Page = mongoose.model("Page", pageSchema);
export default Page;
