import React, { useState } from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import logo from "../images/synap_plan_logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div
      style={{ backgroundColor: "var(--navbar-background-color)" }}
      className="flex justify-between items-center px-8 py-3 fixed top-0 left-0 w-full shadow-xl z-50"
    >

        {/* image */}
      <div className="flex items-center gap-2">
        <div className="w-12">
          <img src={logo} alt="synap-plan-logo" />
        </div>
        <div
          style={{
            color: "var(--navbar-logo-color)",
            fontSize: "var(--navbar-logo-size)",
          }}
          className="font-bold"
        >
          SynapPlan
        </div>
      </div>

          {/* navbar links */}
      <div>
        {/* laptop */}
        <nav
          style={{
            color: "var(--navbar-link-color)",
            fontSize: "var(--navbar-link-size)",
          }}
          className="hidden md:block"
        >
          <ul className="flex gap-[16px] font-semibold">
            {" "}
            <li>
              <Link to={"/"} className="inline-block transition duration-200 hover:font-bold hover:scale-105"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/features"} className="inline-block transition duration-200 hover:font-bold hover:scale-105"> Features </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/howitworks"} className="inline-block transition duration-200 hover:font-bold hover:scale-105"> How It Works </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"} className="inline-block transition duration-200 hover:font-bold hover:scale-105"> Demo </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/login"} className="inline-block transition duration-200 hover:font-bold hover:scale-105"> Login </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/signup"} className="inline-block transition duration-200 hover:font-bold hover:scale-105"> Signup </Link>{" "}
            </li>
          </ul>
        </nav>

        {/* mobile responsiveness */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        style={{backgroundColor: "var(--navbar-background-color)"}}
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div style={{
            color: "var(--navbar-link-color)",
            fontSize: "var(--navbar-link-size)",
          }} className="p-6 flex flex-col gap-6 font-bold">

          {/* Close Button */}
          <button
            className="text-xl self-end"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Links */}
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/features">Features</Link>
          <Link onClick={() => setIsOpen(false)} to="/howitworks">How It Works</Link>
          <Link onClick={() => setIsOpen(false)} to="/blog">Demo</Link>
          <Link onClick={() => setIsOpen(false)} to="/login">Login</Link>
          <Link onClick={() => setIsOpen(false)} to="/signup">Signup</Link>

        </div>
      </div>
    </div>
  );
}
