import { Router } from "express";

import Employee from "../Models/employee.model.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Employee Signup");
});

router.post("/createuser", async (req, res) => {
  // const { name, email, password } = req.body;
  const employeeObject = await Employee.create(req.body);

  const employeeCreated = await Employee.findById(employeeObject._id);
  if (!employeeCreated) {
    res.status(400).json({ message: "Employee not created" });
  } else {
    res.status(201).json(employeeObject);
  }
});

router.get("/createuser", async (req, res) => {
  const employeObject = await Employee.find();
  res.status(200).json(employeObject);
});

export default router;
