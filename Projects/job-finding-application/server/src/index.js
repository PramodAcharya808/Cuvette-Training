import "dotenv/config";
import dbConnect from "./Database/dbConnect.js";
import { app } from "./app.js";

dbConnect()
  .then(() => {
    app.on("error", (err) => {
      console.log("❌ Error starting Express server: " + err.message);
      process.exit(1);
    });

    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to database", err.message);
    process.exit(1);
  });
