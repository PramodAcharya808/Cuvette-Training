import express from "express";
import { apiVersion } from "./constants.js";
import "dotenv/config";


export const app = express();

app.use(express.json());

app.get(`${apiVersion}/api/}`, (req, res) => {
  res.send(`All API's are running on endpoint : ${apiVersion}/ `);
});
