import axios from 'axios';

//defining base url
const baseURL = 'https://pets-care-backend.vercel.app/';

// Create Axios instance
const instance = axios.create({
  baseURL,
  timeout: 10000, // Adjust timeout as needed
});

export default instance;
