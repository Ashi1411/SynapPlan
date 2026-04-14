import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { getUserDetails } from "../api/auth";
import { Link } from "react-router-dom";

export default function AfterLoginNavbar() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
          const res = await getUserDetails();
          setUserData(res.data);
          console.log(res.data);
        }
    
        fetchDetails();
      }, []);

  return (
    <div
      style={{ backgroundColor: "var(--navbar-background-color)" }}
      className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/30 shadow-sm z-50"
    >
      <div>Logo</div>
      <div>
        <nav
          style={{
            color: "var(--navbar-link-color)",
            fontSize: "var(--navbar-link-size)",
          }}
        >
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <p className="font-semibold">Hi {userData?.name}👋</p>
            <p className="hidden sm:block font-semibold">
              {new Date().toLocaleDateString()}
            </p>
            <p className="cursor-pointer"> 🔔 </p>
            <p className="cursor-pointer"> 👤 </p>
          </ul>
        </nav>
      </div>
    </div>
  );
}
