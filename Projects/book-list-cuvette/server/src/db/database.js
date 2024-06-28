import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pramodacharya808:UMtRy2Q8i1ggc5kV@cluster0.pehnb90.mongodb.net/book-store-cuvette"
    )
    .then(() => {
      console.log("✅ Database connection established");
    })
    .catch((err) => {
      console.log("❌ Error connecting to MongoDB: " + err);
      console.log("❌ Cannot start Express server: " + err);
      process.exit(1);
    });
};

export default dbConnect;
