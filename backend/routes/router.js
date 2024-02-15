import express from "express";
import { Users } from "../models/schema.js";

const router = express.Router();

router.post("/", async (request, response) => {
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

    const user = await Users.create(newUser);
    console.log("Created");

    return response.status(201).send(user);
  } catch (error) {
    console.log("error creating:", error);
    response.status(500).send({ message: error.message });
  }
});

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

// router.get("/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const user = await Users.findById(id);
//     return response.status(200).json(user);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// router.put("/:id", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: "Send all required fields: title, author, publishYear",
//       });
//     }
//     const { id } = request.params;
//     const result = await Book.findByIdAndUpdate(id, request.body);
//     if (!result) {
//       return response.status(404).send({ message: "Book not found" });
//     }
//     return response.status(201).send({ message: "Book updated successfuly" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// router.delete("/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const result = await Book.findByIdAndDelete(id);
//     if (!result) {
//       return response.status(404).send({ message: "Book not found" });
//     }
//     return response.status(201).send({ message: "Book updated successfuly" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

export default router;
