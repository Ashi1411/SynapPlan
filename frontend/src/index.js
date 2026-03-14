import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Features from './Pages/Features';
import HowItWorks from './Pages/HowItWorks';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import ProtectedRoutes from './Components/ProtectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter(
  [
    // static routing
    {
      path : '/', 
      element: <Home></Home>
    },
    {
      path : '/features', 
      element: <Features></Features>
    },
    {
      path : '/howitworks',
      element : <HowItWorks></HowItWorks>
    },
    {
      path : '/login',
      element : <Login></Login>
    },
    {
      path : '/signup',
      element : <Signup></Signup>
    },
    {
      path : '/dashboard',
      element : 
      <ProtectedRoutes>
        <Dashboard></Dashboard>
      </ProtectedRoutes>
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
