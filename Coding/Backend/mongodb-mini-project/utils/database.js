import mongoose from "mongoose";
import "dotenv/config";

const dbconnect = async () => {
  const mongodbUrl = process.env.MONOGO_URL;
  await mongoose
    .connect(`${mongodbUrl}/admission-db`)
    .then(() => {
      console.log("✅ DB Connected successfully");
    })
    .catch((err) => {
      console.log("❌ DB Connect Failed: " + err);
    });
};

export default dbconnect;
