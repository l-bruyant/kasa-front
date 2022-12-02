import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "../index.css";
import Root from "../routes/root";
import ErrorPage from "../routes/error-page";
import Home from "../routes/home"
import About from "../routes/about"
import Place from "../routes/place"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "home/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about/",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/place/:placeId",
        element: <Place/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
