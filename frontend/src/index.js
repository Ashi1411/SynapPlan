import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Planner from "./Pages/Planner";
import Analytics from "./Pages/Analytics";
import AddSubject from "./Pages/AddSubject";
import SessionsPage from "./Pages/SessionsPage";
import Settings from "./Pages/Settings";
import Demo from "./Pages/Demo";

import Layout from "./Common/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // static routing
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/howitworks",
        element: <HowItWorks></HowItWorks>,
      },
      {
        path: "/demo",
        element: <Demo></Demo>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoutes>
            <Dashboard></Dashboard>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/planner",
        element: (
          <ProtectedRoutes>
            <Planner></Planner>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/analytics",
        element: (
          <ProtectedRoutes>
            <Analytics></Analytics>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/add-subject",
        element: (
          <ProtectedRoutes>
            <AddSubject></AddSubject>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/session/:id?",
        element: (
          <ProtectedRoutes>
            <SessionsPage></SessionsPage>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoutes>
            <Settings></Settings>
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
