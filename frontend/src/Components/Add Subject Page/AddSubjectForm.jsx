import React, { useState } from "react";
import { addSubject } from "../../api/auth";

import image from "../../images/add subject page/add_subject.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

//! react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddSubjectFrom() {
  let [formData, setFormData] = useState({
    subjectName: "",
    examDate: "",
    priority: "",
    intensity: "",
    dailyStudyHours: "",
    topics: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Add subject button clicked");

    const {
      subjectName,
      examDate,
      priority,
      intensity,
      dailyStudyHours,
      topics,
    } = formData;

    if (
      !subjectName ||
      !examDate ||
      !priority ||
      !intensity ||
      !dailyStudyHours ||
      !topics.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    if (new Date(examDate) <= new Date()) {
      toast.error("Exam date must be in future");
      return;
    }

    try {
      const payload = {
        ...formData,
        dailyStudyHours: Number(formData.dailyStudyHours),
      };
      const res = await addSubject(payload);

      console.log(res.data);
      toast.success("Subject added successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      style={{ background: "var(--login-page)" }}
      className="px-3 mt-12 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 min-h-screen"
    >
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--dashboard-hero-paragraph-color)",
          fontSize: "var(--login-heading-size)",
        }}
        className="font-bold text-center mt-6 sm:mt-10 mb-4"
      >
        Add Subject
      </motion.h1>

      <motion.div
        {...fadeUp}
        transition={{ delay: 0.3 }}
        style={{ background: "var(--login-page-card)" }}
        className="p-4 sm:p-6 md:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto"
      >
        {/* content */}
        <div className="order-2 md:order-1 ">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 sm:mt-6">
              <label
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Subject Name
              </label>
              <input
                value={formData.subjectName}
                onChange={handleChange}
                type="text"
                name="subjectName"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-2 rounded-md"
              ></input>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Exam Date
              </label>
              <input
                value={formData.examDate}
                onChange={handleChange}
                type="date"
                name="examDate"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-2 rounded-md"
              ></input>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Priority
              </label>
              <select
                value={formData.priority}
                name="priority"
                onChange={handleChange}
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-2 rounded-md"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Intensity
              </label>
              <select
                value={formData.intensity}
                name="intensity"
                onChange={handleChange}
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-2 rounded-md"
              >
                <option value="">Select Intensity</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Daily Study Hours
              </label>
              <input
                value={formData.dailyStudyHours}
                onChange={handleChange}
                type="number"
                name="dailyStudyHours"
                placeholder="Enter hours (e.g. 2)"
                min="1"
                max="24"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-2 rounded-md"
              ></input>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Topics List
              </label>
              <input
                value={formData.topics}
                onChange={handleChange}
                type="text"
                name="topics"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-2 rounded-md"
              ></input>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col justify-center items-center ">
              <button
                type="submit"
                style={{
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--login-button-text-size)",
                  background: "var(--login-button-background)",
                }}
                className="font-bold px-6 py-2 rounded-2xl mt-6 sm:mt-10 mb-2"
              >
                Save Subject
              </button>
            </div>
          </form>
        </div>

        {/* image */}
        <motion.div
          style={{ backgroundImage: `url(${image})` }}
          className="
                  order-1
                  md:order-2
                  flex
                  items-center
                  justify-center
                  w-full
                  min-h-[500px]
                  sm:min-h-[600px]
                  md:min-h-[600px]
                  p-2
                  bg-contain
                  bg-center
                  bg-no-repeat
                  rounded-2xl
                  overflow-hidden
                "
          {...fadeUp}
          transition={{ delay: 0.3 }}
        ></motion.div>
      </motion.div>
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
