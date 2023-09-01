import axios from "axios";

const api = axios.create(getBaseURLByEnv());

function getBaseURLByEnv() {
  const DEV_URL = "https://649138542f2c7ee6c2c7dd46.mockapi.io/api/v1/";
  const QA_URL = "https://days15-todo-backend-demo-qa.up.railway.app/";
  const PROD_URL =
    "https://days15-todo-backend-demo-production.up.railway.app/";

  const baseURL = {
    development: {
      baseURL: DEV_URL,
    },
    qa: {
      baseURL: QA_URL,
    },
    prod: {
      baseURL: PROD_URL,
    },
  }[process.env.REACT_APP_ENV || "development"];

  if (!baseURL) return { baseURL: QA_URL };
  return baseURL;
}

export default api;
