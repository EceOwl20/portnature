import express from "express";
import { uploadImage, searchImageByName } from "../controller/images.js";

const router = express.Router();

router.post("/upload", uploadImage); 
router.get("/search", searchImageByName); 

export default router;
