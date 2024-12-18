import express from "express";
import {
  getAllPages,
  getPageByName,
  createPage,
  updatePage,
  deletePage,
  updateComponent,
  deleteItemFromComponent,
  deleteImageFromComponent
} from "../controller/page.js";

const router = express.Router();

// Tüm sayfaları getirme
router.get("/all", getAllPages);

// Belirli bir sayfayı getirme
router.get("/:pageName", getPageByName);

// Yeni sayfa ekleme
router.post("/create", createPage);

// Sayfayı güncelleme
router.put("/:pageName", updatePage);

// Sayfayı silme
router.delete("/:pageName", deletePage);

// Belirli bir component'i güncelleme
router.put("/:pageName/components/:componentIndex", updateComponent);

// Bir component'in items içerisinden belirli bir item'ı silme
router.delete("/:pageName/components/:componentIndex/items/:itemIndex", deleteItemFromComponent);

// Bir component'in images içerisinden belirli bir image'ı silme
router.delete("/:pageName/components/:componentIndex/images/:imageIndex", deleteImageFromComponent);


export default router;
