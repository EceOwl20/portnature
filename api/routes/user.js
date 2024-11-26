import exp from "express";
import { getirBir, getirUsers, guncelleUser, silUsers } from "../controller/user.js";

const router = exp.Router();

router.get("/getir", getirUsers);
router.delete("/delete/:id", silUsers)
router.put("/guncelle/:id", guncelleUser)
router.get("/getirbir/:id", getirBir)

export default router;