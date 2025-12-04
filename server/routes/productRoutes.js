import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
     const products = await Product.find();
     return res.json(products);
});

router.get("/:id", async (req, res) => {
     const product = await Product.findById(req.params.id);
     res.json(product);
});

export default router;