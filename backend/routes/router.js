import express from "express";
import { Pets, Users } from "../models/schema.js";

const router = express.Router();


/* User CRU request */

// To get all users

router.get("/", async (request, response) => {
  try {
    const users = await Users.find({});
    console.log("fetched users");
    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log("error fetching");
    response.status(500).send({ message: error.message });
  }
});

// To create a user

router.post("/register", async (request, response) => {
  let email = request.body.email;
  let phoneNumber = request.body.phoneNumber;
  let password = request.body.password;
  let name = request.body.name;
  let gender = request.body.gender;
  try {
    if (!email || !phoneNumber || !password || !gender || !name) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newUser = {
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      name: name,
      gender: gender,
    };
    const existUser = await Users.findOne({ phoneNumber: phoneNumber });
    if (existUser) {
      response.status(404).send("User already exists. Login instead!");
    }
    const user = await Users.create(newUser);
    console.log("Created");

    return response.status(201).send(user);
  } catch (error) {
    console.log("error creating:", error);
    response.status(500).send({ message: error.message });
  }
});

// To login a user

router.post("/login", async (request, response) => {
  let email = request.body.email;
  let phoneNumber = request.body.phoneNumber;
  let password = request.body.password;
  try {
    if (!email || !phoneNumber || !password) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const loginUser = {
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    const existUser = await Users.findOne({ phoneNumber: phoneNumber });
    if (!existUser) {
      response.status(404).send("User doesn't exists. Signup instead!");
    }
    console.log("Logged in successfully");

    return response.status(201).send(loginUser);
  } catch (error) {
    console.log("error creating:", error.message);
    response.status(500).send({ message: error.message });
  }
});

// To get a user

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await Users.findById(id);
    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// // To edit a user

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.phoneNumber ||
      !request.body.gender ||
      !request.body.password
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = request.params;
    const result = await Users.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).send({ message: "User not found" });
    }
    return response.status(201).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


export default router;
