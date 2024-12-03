import Blog from "../models/blog.js";

export const yeniMakale = async (request, response, next) => {
    try {
        const blog = await Blog.create(request.body);
        return response.status(201).json(blog);
    } catch (error) {
        next(error);
    }
}

export const makaleListele = async (req, res, next) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ success: true, blogs });
    } catch (error) {
      next(error);
    }
}

export const makaleGetir = async (request, response, next) => {
    try {
        const blog = await Blog.findOne({url: request.params.url});
        return response.status(201).json(blog);
    } catch (error) {
        next(error);
    }
}

export const makaleGuncelle = async (request, response, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(request.body._id,{
            $set: request.body
        }, {new: true});

        return response.status(201).json(blog);
    } catch (error) {
        next(error);
    }
}

export const makaleSil = async (request, response, next) => {
    try {
        const blog = await Blog.findByIdAndDelete(request.params.id)
        response.status(201).json(blog);
    } catch (error) {
        next(error)
    }
}