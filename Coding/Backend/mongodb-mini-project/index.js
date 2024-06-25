import express from "express";
import dbconnect from "./utils/database.js";
import "dotenv/config";
import Admission from "./models/admission.model.js";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

dbconnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Express server listening on ${PORT}`);
    });
  })
  .catch((err) => console.log(`DB Connection Error: ${err}`));

app.get("/", (req, res) => {
  res.send("Welcome to home page !");
  console.log(process.env.TEST);
});

app.post("/api/admissionform", async (req, res) => {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json(admission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/admissionform", async (req, res) => {
  const admission = await Admission.find();
  if (admission) {
    res.send(admission);
  } else {
    res.status(404).json({ message: "No admission form found!" });
  }
});

app.get("/user/:name/id/:id", async (req, res) => {
  const { name, id } = req.params;
  res.send(`Hello ${name}\nID ${id}`);
});
