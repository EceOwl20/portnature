import exp from "express"
import { makaleGetir, makaleGuncelle, makaleListele, makaleSil, yeniMakale, makaleGetirByLangAndSlug } from "../controller/blog.js"

const router = exp.Router();

router.post("/yeni", yeniMakale);
router.post("/guncelle/:id", makaleGuncelle)
router.get("/liste",makaleListele);
//router.get("/getir/:id", makaleGetir);
router.delete("/sil/:id",makaleSil)
router.get("/getir/:lang/:slug", makaleGetirByLangAndSlug);


export default router;
