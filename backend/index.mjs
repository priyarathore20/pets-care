import express from "express";
import mongoose from "mongoose";
import { PORT, URL } from "./config.js";
import router from "./routes/router.js";

const app = express();

app.use(express.json());

// app.use("/", (request, response) => {
//   console.log(request);
//   return response.status(201).send("Server is started");
// });

app.use("/admin", router);

mongoose
  .connect(URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("App is listening to port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
