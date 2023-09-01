import axios from "axios";

const api = axios.create({
    //baseURL: 'https://649138542f2c7ee6c2c7dd46.mockapi.io/api/v1/'
    baseURL: 'https://days15-todo-backend-demo-qa.up.railway.app/'
});
export default api;