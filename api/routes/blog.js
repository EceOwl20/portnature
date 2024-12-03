import exp from "express"
import { makaleGetir, makaleGuncelle, makaleListele, makaleSil, yeniMakale } from "../controller/blog.js"

const router = exp.Router();

router.post("/yeni", yeniMakale);
router.post("/guncelle", makaleGuncelle)
router.get("/liste",makaleListele);
router.get("/getir/:url",makaleGetir);
router.delete("/sil/:id",makaleSil)


export default router;
