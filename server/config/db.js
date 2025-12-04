import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected ${connect.connection.host}`);
  } catch (error) {
    console.log(`connection failed ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
