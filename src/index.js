import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HelpPage from "./pages/HelpPage";
import TodoList from "./features/todo/components/TodoList";
import DoneList from "./features/todo/components/DoneList";
import TodoItemDetail from "./features/todo/components/TodoItemDetail";
import ErrorPage from "./pages/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: "/done",
        element: <DoneList />,
      },
      {
        path: "/done/:id",
        element: <TodoItemDetail />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

console.log("process.env.REACT_APP_ENV", process.env.REACT_APP_ENV);
