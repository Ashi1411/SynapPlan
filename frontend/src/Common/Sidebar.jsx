import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";
import { logout } from "../api/auth";

//! react toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sidebar() {
  const navigate = useNavigate();
  let [sidebar, toggleSidebar] = useState(false); //* true if sidebar is visible and false when it is collapsed.

  const handleLogout = async () => {
    try {
      await logout();

      localStorage.clear();
      toast.success("Logout Successful");

      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  return (
    // outer container (participates in flex layout) -> so that other components will get the remaining workspace
    <div className={sidebar ? "sidebarContainer" : "collapseSidebarContainer"}>
      <div
        style={{ background: "var(--sidebar-background)" }}
        className={sidebar ? "sidebar" : "collapseSidebar"}
      >
        <div className="flex flex-col items-end">
          <div
            style={{ background: "var(--sidebar-collapse-background)" }}
            className="rounded-full m-1 mt-12 w-10 p-2"
          >
            <p
              className="text-center cursor-pointer font-bold"
              onClick={() => toggleSidebar(!sidebar)}
            >
              ☰
            </p>
          </div>
        </div>

        <nav
          style={{
            color: "var(--sidebar-link-color)",
            fontSize: "var(--sidebar-link-size)",
          }}
          className={sidebar ? "" : "hidden"}
        >
          <ul className="flex flex-col items-center justify-center font-bold p-4">
            <li>
              <Link to={"/dashboard"}> Dashboard </Link>
            </li>
            <li>
              <Link to={"/planner"}> Planner </Link>
            </li>
            <li>
              <Link to={"/session"}> Sessions </Link>
            </li>
            <li>
              <Link to={"/add-subject"}> Add Subject </Link>
            </li>
            <li>
              <Link to={"/analytics"}> Analytics </Link>
            </li>
            <li>
              <Link to={"/settings"}> Settings </Link>
            </li>
            <li>
              <button onClick={handleLogout}> Logout </button>
            </li>
          </ul>
        </nav>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
