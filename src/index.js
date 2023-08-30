import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HelpPage from './pages/HelpPage';
import TodoList from './features/todo/components/TodoList';
import DoneList from './features/todo/components/DoneList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
         index:true,
         element: <TodoList />
      },
      {
        path: "/done",
        element:  <DoneList />
      },
      {
        path: "/help",
        element: <HelpPage />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
