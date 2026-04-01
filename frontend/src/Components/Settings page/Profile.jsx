import React, { useEffect, useState } from "react";
import { getUserDetails, editProfile } from "../../api/auth";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    interests: "",
  });

  useEffect(() => {
    async function fetchDetails() {
      const res = await getUserDetails();
      setUserData(res.data);
      console.log(res.data);

      setForm({
        fullname: res.data.name || "",
        interests: res.data.interests || "",
      });
    }

    fetchDetails();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await editProfile(form);

      const updated = await getUserDetails(); // refetch
      setUserData(updated.data);

      setIsEditing(false);
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div style={{ background: "var(--card-color-2)" }} className="mt-12 p-10">
      {/* profile image */}
      <div></div>

      {/* user details */}
      <div>
        <div className="grid grid-cols-2 gap-10">
          <div
            style={{ background: "var(--card-color-1)" }}
            className="px-10 py-4 m-4 rounded-3xl"
          >
            <h2
              style={{
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="font-bold"
            >
              Name
            </h2>
            <p
              style={{
                color: "var(--dashboard-hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
              }}
              className="font-semibold"
            >
              {isEditing ? (
                <input
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  className="bg-transparent border-b outline-none"
                />
              ) : (
                userData?.name
              )}
            </p>
          </div>
          <div
            style={{ background: "var(--card-color-1)" }}
            className="px-10 py-4 m-4 rounded-3xl"
          >
            <h2
              style={{
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="font-bold"
            >
              Email
            </h2>
            <p
              style={{
                color: "var(--dashboard-hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
              }}
              className="font-semibold"
            >
              {userData?.email}
            </p>
          </div>
        </div>

        <div
          style={{ background: "var(--card-color-1)" }}
          className="px-10 py-4 m-4 rounded-3xl"
        >
          <h2
            style={{
              color: "var(--dashboard-hero-heading-color)",
              fontSize: "var(--dashboard-hero-subheading-size)",
            }}
            className="font-bold"
          >
            Interests
          </h2>
          <p
            style={{
              color: "var(--dashboard-hero-paragraph-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="font-semibold"
          >
            {isEditing ? (
              <input
                name="interests"
                value={form.interests}
                onChange={handleChange}
                className="bg-transparent border-b outline-none w-full"
              />
            ) : (
              userData?.interests || "No interests added"
            )}
          </p>
        </div>
      </div>

      {/* edit profile button */}
      <div className="text-center m-14">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              background: "var(--login-button-background)",
              color: "var(--login-button-text-color)",
              fontSize: "var(--dashboard-today-plan-button-size)",
            }}
            className="px-14 py-2 rounded-3xl font-bold"
          >
            Edit Profile
          </button>
        ) : (
          <div>
            <button
              onClick={handleSave}
              style={{
                background: "var(--login-button-background)",
                color: "var(--login-button-text-color)",
                fontSize: "var(--dashboard-today-plan-button-size)",
              }}
              className="px-14 py-2 rounded-3xl font-bold m-4"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              style={{
                background: "var(--login-button-background)",
                color: "var(--login-button-text-color)",
                fontSize: "var(--dashboard-today-plan-button-size)",
              }}
              className="px-14 py-2 rounded-3xl font-bold m-4"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
