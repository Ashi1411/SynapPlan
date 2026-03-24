import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTodaySessions } from "../../api/auth";
import { startSession } from "../../api/auth";
import { pauseSession } from "../../api/auth";
import { endBreak } from "../../api/auth";
import { completeSession } from "../../api/auth";
import { getSession } from "../../api/auth";

export default function FocusTimer() {
  const { id } = useParams();

  const [session, setSession] = useState(null);
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);


  //! get correct session
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        let res;

        if (id) {
          // planner card click
          res = await getSession(id);
          setSession(res.data);
        } else {
          // sidebar click
          res = await getTodaySessions();

          if (!res.data.defaultSession) {
            alert("No sessions for today");
            return;
          }

          setSession(res.data.defaultSession);
        }

        console.log(res.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchSessions();
  }, [id]);

  return (
    <div style={{ background: "var(--card-color-2)" }} className="mt-12 p-10">
      {/* main heading */}
      <h2
        style={{
          color: "var(--dashboard-hero-paragraph-color)",
          fontSize: "var(--login-heading-size)",
        }}
        className="font-bold text-center p-10"
      >
        FOCUS TIMER
      </h2>
      <div
        style={{ background: "var(--card-color-1)" }}
        className="text-center w-[55%] m-auto rounded-3xl"
      >

        {/* topics and heading */}
        <p
          style={{
            color: "var(--dashboard-hero-paragraph-color)",
            fontSize: "var(--dashboard-hero-subheading-size)",
          }}
          className="font-bold p-1"
        >
          {session?.subjectId?.subjectName}
        </p>
        <div>
          {session?.topics?.map((ele, i) => {
            return (
              <div key={i}>
                <p
                  style={{
                    color: "var(--dashboard-hero-paragraph-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-semibold"
                >
                  {ele}
                </p>
              </div>
            );
          })}
        </div>

          {/* timer card */}
        <div
          style={{ background: "var(--feature-icons-background)" }}
          className="mx-20 mb-10 mt-5 rounded-3xl"
        >
          <h1
            style={{
              fontSize: "var(--timer-font-size)",
              color: "var(--timer-font-color)",
            }}
            className="font-bold px-20 py-10"
          >
            01:24:32
          </h1>
        </div>

          {/* buttons */}
        <div className="grid grid-cols-3 gap-10 mx-8">
          <button
            style={{
              background: "var(--feature-icons-background)",
              color: "var(--timer-font-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="px-8 py-1 rounded-3xl font-bold m-2"
          >
            Start
          </button>

          <button
            style={{
              background: "var(--feature-icons-background)",
              color: "var(--timer-font-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="px-8 py-1 rounded-3xl font-bold m-2"
          >
            Pause
          </button>

          <button
            style={{
              background: "var(--feature-icons-background)",
              color: "var(--timer-font-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="px-8 py-1 rounded-3xl font-bold m-2"
          >
            Break Time
          </button>
        </div>

          {/* duration and break related text */}
        <div className="grid grid-cols-3">
            <p
          style={{
            color: "var(--dashboard-hero-paragraph-color)",
            fontSize: "var(--dashboard-hero-paragraph-size)",
          }}
          className="font-semibold mb-6"
        >
          Duration Completed: {session?.durationCompleted}
        </p>
        <p
          style={{
            color: "var(--dashboard-hero-paragraph-color)",
            fontSize: "var(--dashboard-hero-paragraph-size)",
          }}
          className="font-semibold mb-6"
        >
          Break Duration: {session?.breakDuration}
        </p>
        <p
          style={{
            color: "var(--dashboard-hero-paragraph-color)",
            fontSize: "var(--dashboard-hero-paragraph-size)",
          }}
          className="font-semibold mb-6"
        >
          Break Count: {session?.breakCount}
        </p>
        </div>
      </div>

          {/* progress bar of current session */}
      <div>
        <p
          style={{
            color: "var(--dashboard-hero-heading-color)",
            fontSize: "var(--dashboard-hero-subheading-size)",
          }}
          className="font-bold p-10"
        >
          Session Completed : 75%
        </p>
      </div>
    </div>
  );
}
