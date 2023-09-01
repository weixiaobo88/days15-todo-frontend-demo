import axios from "axios";

const LOCAL_BASE_URL = "http://localhost:8080/";
const baseURLByEnv = process.env.REACT_APP_BASE_URL || LOCAL_BASE_URL;

const api = axios.create({
  baseURL: baseURLByEnv,
});


export default api;
