import Blog from "../models/blog.js";

export const yeniMakale = async (request, response, next) => {
    try {
        console.log("Gelen veri:", request.body); // kontrol
        const blog = await Blog.create(request.body);
        return response.status(201).json(blog);
    } catch (error) {
        console.error("Veritabanı hatası:", error);
        next(error);
    }
  }
  

export const makaleListele = async (request, reponse, next) => {
    try {
      const blogs = await Blog.find();
      reponse.status(200).json({ success: true, blogs });
    } catch (error) {
      next(error);
    }
}

export const makaleGetir = async (request, response, next) => {
    const {id } = request.params;
    try {
        const blog = await Blog.findById({ id });
        if (blog) {
            response.status(200).json({ success: true, blog });
        } else {
            response.status(404).json({ success: false, message: "Blog bulunamadı" });
        }
    } catch (error) {
        next(error);
    }
}

export const makaleGuncelle = async (req, res, next) => {
    try {
      const blog = await Blog.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true });
  
      if (!blog) {
        return res.status(404).json({ success: false, message: "Blog bulunamadı" });
      }
      
      return res.status(200).json({ success: true, message: "Blog güncellendi", blog });
    } catch (error) {
      next(error);
    }
  }
  

export const makaleSil = async (request, response, next) => {
    try {
        const blog = await Blog.findByIdAndDelete(request.params.id);
        if (blog) {
            response.status(200).json({ success: true, message: 'Blog başarıyla silindi', blog });
        } else {
            response.status(404).json({ success: false, message: 'Blog bulunamadı' });
        }
    } catch (error) {
        console.error('makaleSil Hatası:', error);
        response.status(500).json({ success: false, message: 'Sunucu hatası' });
    }
};
