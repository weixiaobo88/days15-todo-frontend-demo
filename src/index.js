import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App />
}]);

root.render(
  <React.StrictMode>
    <Provider store={store}>   
      <RouterProvider router={router} / >
    </Provider>
  </React.StrictMode>
);
