import React, { useState } from "react";
import { addSubject } from "../../api/auth";

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
      !topics
    ) {
      setError("All the fields are required");
      return;
    }

    try {
      const res = await addSubject(formData);

      console.log(res.data);
      alert("Subject added successfully");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ background: "var(--login-page)" }} className="p-10">
      <h1
        style={{
          color: "var(--dashboard-hero-paragraph-color)",
          fontSize: "var(--login-heading-size)",
        }}
        className="font-bold text-center m-10"
      >
        Add Subject
      </h1>

      <div
        style={{ background: "var(--login-page-card)" }}
        className="p-10 px-20 rounded-3xl grid grid-cols-2 gap-10 flex flex-col items-center justify-center"
      >
        {/* content */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
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
                onChange={handleChange}
                type="text"
                name="subjectName"
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%] p-1"
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
                onChange={handleChange}
                type="date"
                name="examDate"
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%] p-1"
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
                name="priority"
                onChange={handleChange}
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%] p-1"
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
                name="intensity"
                onChange={handleChange}
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%] p-1"
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
                onChange={handleChange}
                type="number"
                name="dailyStudyHours"
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%] p-1"
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
                onChange={handleChange}
                type="text"
                name="topics"
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%] p-1"
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
                className="font-bold p-1 px-10 rounded-2xl mt-14 mb-2"
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
        <div></div>
      </div>
    </div>
  );
}
