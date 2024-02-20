import axios from "axios";

//defining base url
const baseURL = "http://localhost:8000/";
// const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
console.log(baseURL);

// Create Axios instance
const instance = axios.create({
  baseURL,
  timeout: 10000, // Adjust timeout as needed
  // Add other configurations like headers, interceptors, etc.
});

export default instance;
