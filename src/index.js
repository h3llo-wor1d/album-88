import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import './styles/fonts/Uni Sans Thin.otf';
import './styles/fonts/Uni Sans Heavy.otf';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);