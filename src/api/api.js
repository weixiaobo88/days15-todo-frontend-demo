import axios from "axios";

const api = axios.create({
    baseURL: 'https://649138542f2c7ee6c2c7dd46.mockapi.io/api/v1/'
});
export default api;