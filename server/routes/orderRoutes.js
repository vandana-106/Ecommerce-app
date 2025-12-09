import Order from "../models/Order.js";
import protect from "../middlewares/authMiddleware.js";
import express from "express";

const router=express.Router();

router.post("/", protect,async(req,res)=>
{
    try {
        const {items,totalAmount}=req.body;
        const userId=req.user.userId;

        const newOrder= await Order.create({
            user:userId,
            items,
            totalAmount
        });
        res.status(201).json({message:"Order created successfully", order:newOrder});

    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
})

export default router;