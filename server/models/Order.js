import mongoose from 'mongoose';

const orderSchema =mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    items:[
        {
            productId:String,
            name:String,
            price:Number,
            quantity:Number
        }
    ],
    totalAmount:{type:Number, required:true},
},{timeStamps:true});

const Order= mongoose.model("Order", orderSchema);

export default Order;