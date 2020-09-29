import axios from "axios";

const instance = axios.create({
  baseURL: "https://hirwab-amazon-clone.herokuapp.com/",
  // "http://localhost:7000/",
  // "http://localhost:5001/cl-1414a/us-central1/api", //The API url (cloud functional URL),
});

export default instance;
