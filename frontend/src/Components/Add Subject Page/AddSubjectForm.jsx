import React, { useState } from "react";
import { addSubject } from "../../api/auth";

import image from "../../images/add subject page/add_subject.png";

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

  const [error, setError] = useState("");

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
      setError("All the fields are required");
      return;
    }

    if (new Date(examDate) <= new Date()) {
      setError("Exam date must be in future");
      return;
    }

    try {
      const res = await addSubject(formData);

      console.log(res.data);
      toast.success("Subject added successfully");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      style={{ background: "var(--login-page)" }}
      className="px-3 mt-12 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 min-h-screen"
    >
      <h1
        style={{
          color: "var(--dashboard-hero-paragraph-color)",
          fontSize: "var(--login-heading-size)",
        }}
        className="font-bold text-center mt-6 sm:mt-10 mb-4"
      >
        Add Subject
      </h1>

      <div
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

          {/* displaying the error mssg */}
          {
            <p
              style={{
                fontSize: "var(--login-text-size)",
              }}
              className="font-semibold text-red-600 flex flex-col justify-center items-center m-4"
            >
              {error}
            </p>
          }
        </div>

        {/* image */}
        <div className="order-1 md:order-2 flex items-center justify-center w-full min-h-[200px] sm:min-h-[250px] md:min-h-[350px] p-2">
          <img
            src={image}
            alt="weekly-summary"
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
          ></img>
        </div>
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
