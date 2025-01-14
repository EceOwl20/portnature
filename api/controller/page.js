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
    const { pageName, translations } = req.body;

    // Eğer sayfa zaten varsa tekrar oluşturulmasını engelle
    const existingPage = await Page.findOne({ pageName });
    if (existingPage) {
      return res
        .status(400)
        .json({ message: "Page with this name already exists" });
    }

    const newPage = new Page({
      pageName,
      translations,
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
    const { translations } = req.body;

    const updatedPage = await Page.findOneAndUpdate(
      { pageName },
      { translations },
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

export const updateLanguageComponents = async (req, res) => {
  const { pageName, language } = req.params; // language = "en", "tr", "de", "ru"
  const components = req.body;

  try {
    const page = await Page.findOne({ pageName });
    if (!page) return res.status(404).json({ message: "Page not found" });

    page.translations[language] = components;
    await page.save();

    res.status(200).json({ message: `Components updated for language: ${language}` });
  } catch (error) {
    console.error("Error updating language components:", error);
    res.status(500).json({ message: "Server error", error });
  }
};



// Belirli bir component'i güncelleme
export const updateComponent = async (req, res) => {
  const { pageName, language, componentIndex } = req.params;
  const updatedData = req.body;

  try {
    const page = await Page.findOne({ pageName });
    if (!page) return res.status(404).json({ message: "Page not found" });

    const translation = page.translations.find((t) => t.language === language);
    if (!translation) return res.status(404).json({ message: `Translation for ${language} not found` });

    translation.components[componentIndex] = updatedData;
    await page.save();

    res.status(200).json({ message: "Component updated successfully" });
  } catch (error) {
    console.error("Error updating component:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const deleteItemFromComponent = async (req, res) => {
  const { pageName, language, componentIndex, itemIndex } = req.params;

  try {
    const page = await Page.findOne({ pageName });
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    const translation = page.translations.find((t) => t.language === language);
    if (!translation) return res.status(404).json({ message: `Translation for ${language} not found` });

    const component = translation.components[componentIndex];
    if (!component) return res.status(404).json({ message: "Component not found" });

    if (!component.props.items || !component.props.items[itemIndex]) {
      return res.status(404).json({ message: "Item not found" });
    }

    component.props.items.splice(itemIndex, 1);
    await page.save();

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const deleteImageFromComponent = async (req, res) => {
  const { pageName, componentIndex, imageIndex } = req.params;

  try {
    const page = await Page.findOne({ pageName });
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    // İlgili component'e ulaş
    const component = page.components[componentIndex];
    if (!component) {
      return res.status(404).json({ message: "Component not found" });
    }

    // images yoksa veya imageIndex geçerli değilse hata ver
    if (!component.props.images || !component.props.images[imageIndex]) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Image'ı array'den çıkar
    component.props.images.splice(imageIndex, 1);

    await page.save();
    return res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};



