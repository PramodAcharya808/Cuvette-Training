import mongoose from "mongoose";
import "dotenv/config";

const dbconnect = async () => {
  const mongodbUrl =
    "mongodb+srv://pramodacharya808:UMtRy2Q8i1ggc5kV@cluster0.pehnb90.mongodb.net";
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
