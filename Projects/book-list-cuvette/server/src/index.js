import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dbConnect from "./db/database.js";
import router from "./routes/bookDetails.route.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

dbConnect()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log("Error: ", err);
  });

const apiVersion = "/api/v1";
app.use(`${apiVersion}/books`, router);
