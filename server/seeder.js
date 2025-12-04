import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/product.js";
import products from "./data/products.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    console.log("Clearing old products...");
    await Product.deleteMany();

    console.log("Inserting new products...");
    await Product.insertMany(products);

    console.log("Sample Products Inserted Successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error inserting sample data:", error);
    process.exit(1);
  }
};

importData();
