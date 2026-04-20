import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";
import { logout } from "../api/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  let [sidebar, toggleSidebar] = useState(true); //* true if sidebar is visible and false when it is collapsed.

  const handleLogout = async () => {
    try {
      await logout();

      localStorage.clear();

      navigate("/");
    }
    catch(err) {
      console.log(err);
      alert("Logout failed");
    }
  }

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
            className="rounded-full m-1 mt-8 w-10 p-2 z-[10]"
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
              <Link to={"/logout"} onClick={handleLogout}> Logout </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
