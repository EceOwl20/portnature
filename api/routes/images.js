import express from "express";
import { uploadImage, searchImageByName,getImagesByName,getAllImages, deleteImage } from "../controller/images.js";

const router = express.Router();

router.post("/upload", uploadImage); 
router.get("/search", searchImageByName); 
router.get("/searchbyname", getImagesByName); 
router.get("/all", getAllImages);
router.delete("/:id", deleteImage);  

export default router;
