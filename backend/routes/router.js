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

// To edit a user

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

/* Pet CRUD requests */

// To get all pets //

router.get("/pets", async (request, response) => {
  try {
    const pets = await Pets.find({});
    console.log("fetched all pets");
    return response.status(200).json({
      count: pets.length,
      data: pets,
    });
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: error.message });
  }
});

// To create a pet

router.post("/pets/add-a-pet", async (request, response) => {
  let age = request.body.age;
  let name = request.body.age;
  let sex = request.body.sex;
  let breed = request.body.breed;
  let weight = request.body.weight;
  let description = request.body.description;
  let healthInformation = request.body.healthInformation;
  try {
    if (
      !age ||
      !sex ||
      !breed ||
      !weight ||
      !name ||
      !description ||
      !healthInformation
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newPet = {
      name: name,
      age: age,
      weight: weight,
      sex: sex,
      breed: breed,
      description: description,
      healthInformation: healthInformation,
    };

    const pet = await Pets.create(newPet);
    console.log("Created");

    return response.status(201).send(pet);
  } catch (error) {
    console.log("error creating:", error);
    response.status(500).send({ message: error.message });
  }
});

// To get a specified pet

router.get("/pets/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const pet = await Pets.findById(id);
    return response.status(200).json(pet);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// To update a pet

router.put("/pets/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.breed ||
      !request.body.sex ||
      !request.body.age ||
      !request.body.weight ||
      !request.body.healthInformation ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const { id } = request.params;
    const result = await Pets.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).send({ message: "Pet not found" });
    }
    return response.status(201).send({ message: "Pet updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
