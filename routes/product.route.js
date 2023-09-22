import express from "express";
import { addProduct, deleteProduct, updateProduct, viewProduct } from "../controller/product.controller.js";
import multer from "multer";
const router = express.Router();
const upload = multer({dest:"public/images"})

router.post("/addproduct",addProduct);
router.get("/viewproduct",viewProduct);
router.post("/updateproduct/:id",updateProduct);
router.delete("/deleteproduct/:id",deleteProduct);

export default router;