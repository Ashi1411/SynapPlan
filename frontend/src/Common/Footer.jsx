import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      style={{ background: "var(--footer-background)" }}
      className="grid grid-cols-4 p-6"
    >
        
        {/* section - 1 */}
      <div className="m-10 mb-20 flex flex-col items-center justify-center">
        <h1>Logo</h1>

        <p style={{fontSize : "var(--footer-paragraph)", color : "var(--footer-text-color)"}} className="font-semibold text-center">
          An intelligent study planning system that adapts to your habits,
          improves consistency, and helps you achieve better results without
          burnout.
        </p>

        <div className="grid grid-cols-3 w-[70%]">
          <div
            style={{ background: "var(--footer-icons-background)" }}
            className="flex flex-col items-center justify-center rounded-full mt-6 mb-10 aspect-[1] w-[55px]"
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
            className="flex flex-col items-center justify-center rounded-full mt-6 mb-10 aspect-[1] w-[55px]"
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
            className="flex flex-col items-center justify-center rounded-full mt-6 mb-10 aspect-[1] w-[55px]"
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
      <div className="m-10 mb-20 flex flex-col items-center justify-center">
        <h2 style={{fontSize : "var(--footer-heading)", color : "var(--footer-text-color)"}} className="font-bold text-center">
            Quick Links
        </h2>

        <nav style={{fontSize : "var(--footer-paragraph)", color : "var(--footer-text-color)"}} className="font-semibold text-center">
            <ul className='flex flex-col m-1'>
                <li> <Link to={'/'}> Home </Link> </li>
                <li> <Link to={'/about-us'}> Features </Link> </li>
                <li> <Link to={'/course'}> How It Works </Link> </li>
                <li> <Link to={'/blog'}> Demo </Link> </li>
                <li> <Link to={'/blog'}> Login </Link> </li>
                <li> <Link to={'/blog'}> Signup </Link> </li>
            </ul>
        </nav>
      </div>

      {/* section - 3 */}
      <div className="m-10 mb-20 flex flex-col items-center justify-center">
        <h2 style={{fontSize : "var(--footer-heading)", color : "var(--footer-text-color)"}} className="font-bold text-center">
            Features
        </h2>

        <nav style={{fontSize : "var(--footer-paragraph)", color : "var(--footer-text-color)"}} className="font-semibold text-center">
            <ul className='flex flex-col m-1'>
                <li> Adaptive Planning </li>
                <li> Burnout Detection </li>
                <li> Smart Scheduling </li>
                <li> Behavior Tracking </li>
                <li> Recovery Strategies </li>
            </ul>
        </nav>
      </div>

      {/* section - 4 */}
      <div className="m-10 mb-20 flex flex-col items-center justify-center">
        <h2 style={{fontSize : "var(--footer-heading)", color : "var(--footer-text-color)"}} className="font-bold text-center">
            Contact / Info
        </h2>

        <nav style={{fontSize : "var(--footer-paragraph)", color : "var(--footer-text-color)"}} className="font-semibold text-center">
            <ul className='flex flex-col m-1'>
                <li> mail: support@adaptiveplanner.com</li>
                <li> GitHub: github.com/yourproject</li>
                <li> LinkedIn: yourprofile</li>
            </ul>
        </nav>
      </div>
    </div>
  );
}
