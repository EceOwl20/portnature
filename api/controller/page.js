import Page from "../models/page.js";

// Tüm sayfaları getirme
export const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find();
    if (!pages || pages.length === 0) {
      return res.status(404).json({ message: "No pages found" });
    }
    res.status(200).json(pages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Belirli bir sayfayı getirme
export const getPageByName = async (req, res) => {
  try {
    const { pageName } = req.params;
    const page = await Page.findOne({ pageName });

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json(page);
  } catch (error) {
    console.error("Error fetching page:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Yeni sayfa ekleme
export const createPage = async (req, res) => {
  try {
    const { pageName, components } = req.body;

    // Eğer sayfa zaten varsa, tekrar oluşturulmasını engelle
    const existingPage = await Page.findOne({ pageName });
    if (existingPage) {
      return res
        .status(400)
        .json({ message: "Page with this name already exists" });
    }

    const newPage = new Page({
      pageName,
      components,
    });

    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    console.error("Error creating page:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Sayfayı güncelleme
export const updatePage = async (req, res) => {
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
    console.error("Error updating page:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Sayfayı silme
export const deletePage = async (req, res) => {
  try {
    const { pageName } = req.params;

    const deletedPage = await Page.findOneAndDelete({ pageName });

    if (!deletedPage) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json({ message: "Page deleted successfully" });
  } catch (error) {
    console.error("Error deleting page:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Belirli bir component'i güncelleme
export const updateComponent = async (req, res) => {
  const { pageName, componentIndex } = req.params;
  const updatedData = req.body;

  try {
    const page = await Page.findOne({ pageName });
    if (!page) return res.status(404).json({ message: "Page not found" });

    page.components[componentIndex] = updatedData;
    await page.save();

    res.status(200).json({ message: "Component updated successfully" });
  } catch (error) {
    console.error("Error updating component:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
