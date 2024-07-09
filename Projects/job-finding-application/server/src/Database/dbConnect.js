import mongoose from "mongoose";
import { dbCollectionName } from "../constants.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${dbCollectionName}`);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default dbConnect;
