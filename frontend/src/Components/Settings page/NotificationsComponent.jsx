import React, { useEffect, useState } from 'react'
import { todayNotifications } from '../../api/auth';

export default function NotificationsComponent() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const res = await todayNotifications();

      setNotifications(res.data);
      console.log(res.data);
    }

    fetchDetails();
  }, [])

  return (
    <div style={{ background: "var(--card-color-2)" }} className="p-10">
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        NOTIFICATIONS
      </h1>

      {/* notifications */}
      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-6 rounded-2xl"
      >
        {notifications?.map((ele, i) => {
          return (
            <div key={i}>
              <p
                style={{
                  background: "var(--card-color-1)",
                  fontSize: "var(--dashboard-hero-paragraph-size)",
                  color: "var(--dashboard-hero-paragraph-color)",
                }}
                className="p-1 rounded-2xl text-center font-bold my-4"
              >
                {ele}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
