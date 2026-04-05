import {
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/synap_plan_logo.png";

export default function Footer() {
  return (
    <div
      style={{ background: "var(--footer-background)" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16 py-12"
    >
      {/* section - 1 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <div className="flex items-center gap-2">
          <div className="w-12">
            <img src={logo} alt="synap-plan-logo" />
          </div>
          <div
            style={{
              color: "var(--login-button-text-color)",
              fontSize: "var(--navbar-logo-size)",
            }}
            className="font-bold"
          >
            SynapPlan
          </div>
        </div>

        <p
          style={{
            fontSize: "var(--footer-paragraph)",
            color: "var(--footer-text-color)",
          }}
          className="font-semibold text-center"
        >
          An intelligent study planning system that adapts to your habits,
          improves consistency, and helps you achieve better results without
          burnout.
        </p>

        <div className="flex gap-4 mt-4">
          <div
            style={{ background: "var(--footer-icons-background)" }}
            className="flex flex-col items-center justify-center rounded-full mt-6 mb-10 aspect-[1] w-10 h-10 sm:w-12 sm:h-12"
          >
            {/* icons */}
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ fontSize: "var(--footer-icons-size)" }}
              className="p-2 cursor-pointer"
            ></FontAwesomeIcon>
          </div>

          <div
            style={{ background: "var(--footer-icons-background)" }}
            className="flex flex-col items-center justify-center rounded-full mt-6 mb-10 aspect-[1] w-10 h-10 sm:w-12 sm:h-12"
          >
            {/* icons */}
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: "var(--footer-icons-size)" }}
              className="p-2 cursor-pointer text-red-600"
            ></FontAwesomeIcon>
          </div>

          <div
            style={{ background: "var(--footer-icons-background)" }}
            className="flex flex-col items-center justify-center rounded-full mt-6 mb-10 aspect-[1] w-10 h-10 sm:w-12 sm:h-12"
          >
            {/* icons */}
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "var(--footer-icons-size)" }}
              className="p-2 cursor-pointer text-pink-700"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      {/* section - 2 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2
          style={{
            fontSize: "var(--footer-heading)",
            color: "var(--footer-text-color)",
          }}
          className="font-bold text-center"
        >
          Quick Links
        </h2>

        <nav
          style={{
            fontSize: "var(--footer-paragraph)",
            color: "var(--footer-text-color)",
          }}
          className="font-semibold text-center"
        >
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              {" "}
              <Link to={"/"}> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/about-us"}> Features </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/course"}> How It Works </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/blog"}> Demo </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/blog"}> Login </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/blog"}> Signup </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>

      {/* section - 3 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2
          style={{
            fontSize: "var(--footer-heading)",
            color: "var(--footer-text-color)",
          }}
          className="font-bold text-center"
        >
          Features
        </h2>

        <nav
          style={{
            fontSize: "var(--footer-paragraph)",
            color: "var(--footer-text-color)",
          }}
          className="font-semibold text-center"
        >
          <ul className="flex flex-col gap-2 mt-2">
            <li> Adaptive Planning </li>
            <li> Burnout Detection </li>
            <li> Smart Scheduling </li>
            <li> Behavior Tracking </li>
            <li> Recovery Strategies </li>
          </ul>
        </nav>
      </div>

      {/* section - 4 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2
          style={{
            fontSize: "var(--footer-heading)",
            color: "var(--footer-text-color)",
          }}
          className="font-bold text-center"
        >
          Contact / Info
        </h2>

        <nav
          style={{
            fontSize: "var(--footer-paragraph)",
            color: "var(--footer-text-color)",
          }}
          className="font-semibold text-center"
        >
          <ul className="flex flex-col gap-2 mt-2">
            <li> mail: support@adaptiveplanner.com</li>
            <li> GitHub: github.com/project</li>
            <li> LinkedIn: profile</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
