import { Outlet } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";

//! react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Outlet />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}