import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectToDatabase;