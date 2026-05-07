import React, { useEffect, useState } from "react";
import { todayNotifications } from "../../api/auth";

export default function NotificationsComponent() {
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await todayNotifications();

      setNotifications(res.data);
      console.log(res.data);
    }

    fetchDetails();
  }, []);

  return (
    <div
      id="notifications"
      style={{ background: "var(--card-color-2)" }}
      className="px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 min-h-screen"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-6 sm:pt-10 pb-2 font-bold px-2"
      >
        NOTIFICATIONS
      </h1>

      {/* notifications */}
      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-3 sm:p-4 md:p-6 rounded-2xl max-w-4xl mx-auto"
      >
        {notifications === null ? (
          <p className="text-center py-6">Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <p className="text-center text-sm sm:text-base py-6">
            No notifications for today 🎉
          </p>
        ) : (
          notifications?.map((ele, i) => {
            return (
              <div key={i}>
                <p
                  style={{
                    background: "var(--card-color-1)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                    color: "var(--dashboard-hero-paragraph-color)",
                  }}
                  className="p-2 sm:p-3 rounded-xl text-center font-semibold my-2 sm:my-3 break-words"
                >
                  {ele}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
