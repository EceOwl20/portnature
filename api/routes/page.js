import express from "express";
import {
  getAllPages,
  getPageByName,
  createPage,
  updatePage,
  deletePage,
  updateComponent,
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

export default router;
