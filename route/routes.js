import express from "express"
import {getBarang,getBarangById,updateBarang,deleteBarang,createBarang} from "../controller/gudangBarang.js"
const router = express.Router()

router.get("/",getBarang)
router.get("/find",getBarangById)
router.post("/create",createBarang)
router.put("/update",updateBarang)
router.delete("/delete",deleteBarang)

export default router