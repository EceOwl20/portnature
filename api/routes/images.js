import express from "express";
import { uploadImage, searchImageByName,getImagesByName,getAllImages, deleteImage,updateImage, getImageById } from "../controller/images.js";

const router = express.Router();

router.post("/upload", uploadImage); 
router.get("/search", searchImageByName); 
router.get("/searchbyname", getImagesByName); 
router.get("/all", getAllImages);
router.delete("/:id", deleteImage);  
router.put("/:id", updateImage);
router.get("/:id", getImageById);

export default router;
