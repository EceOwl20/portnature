import express from "express";
import Page from "../models/page.js";

const router = express.Router();

// Tüm sayfaları getirme
router.get("/", async (req, res) => {
  try {
    const pages = await Page.find();
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pages", error });
  }
});

// Belirli bir sayfayı getirme
router.get("/:pageName", async (req, res) => {
  try {
    const { pageName } = req.params;
    const page = await Page.findOne({ pageName });

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: "Error fetching page", error });
  }
});

// Yeni sayfa ekleme
router.post("/", async (req, res) => {
  try {
    const { pageName, components } = req.body;

    const newPage = new Page({ pageName, components });
    await newPage.save();

    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ message: "Error creating page", error });
  }
});

// Sayfayı güncelleme
router.put("/:pageName", async (req, res) => {
  try {
    const { pageName } = req.params;
    const { components } = req.body;

    const updatedPage = await Page.findOneAndUpdate(
      { pageName },
      { components },
      { new: true }
    );

    if (!updatedPage) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json(updatedPage);
  } catch (error) {
    res.status(500).json({ message: "Error updating page", error });
  }
});

// Sayfayı silme
router.delete("/:pageName", async (req, res) => {
  try {
    const { pageName } = req.params;

    const deletedPage = await Page.findOneAndDelete({ pageName });

    if (!deletedPage) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json({ message: "Page deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting page", error });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { pageName, components } = req.body;

    // Eğer sayfa zaten varsa, tekrar oluşturulmasını engelle
    const existingPage = await Page.findOne({ pageName });
    if (existingPage) {
      return res
        .status(400)
        .json({ message: "Page with this name already exists" });
    }

    // Yeni sayfa oluştur
    const newPage = new Page({
      pageName,
      components,
    });

    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    console.error("Error creating page:", error);
    res.status(500).json({ message: "Error creating page", error });
  }
});


export default router;
