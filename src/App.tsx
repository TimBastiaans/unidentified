import React from 'react';
import logo from './logo.svg'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './routes/projects'
import AboutUs from './routes/aboutUs'
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "aboutUs",
    element: <AboutUs/>,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
