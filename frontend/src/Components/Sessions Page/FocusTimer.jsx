import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTodaySessions } from "../../api/auth";
import { startSession } from "../../api/auth";
import { pauseSession } from "../../api/auth";
import { startBreak } from "../../api/auth";
import { endBreak } from "../../api/auth";
import { completeSession } from "../../api/auth";
import { getSession } from "../../api/auth";

export default function FocusTimer() {
  const { id } = useParams();

  const [session, setSession] = useState(null);
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const [baseTime, setBaseTime] = useState(0);
  const [baseBreak, setBaseBreak] = useState(0);

  const [isSessionRunning, setIsSessionRunning] = useState(false);
  const [isBreakRunning, setIsBreakRunning] = useState(false);


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

  //! for setting the correct time even after reloading the page
  useEffect(() => {
    if (session) {
      setBaseTime((session.durationCompleted || 0) * 60);
      setBaseBreak((session.breakDuration || 0) * 60);
    }
  }, [session]);


  //! timer logic
  useEffect(() => {
    if (!session) return;

    const interval = setInterval(() => {
      const now = new Date();

      let currentTime = baseTime;
      let currentBreak = baseBreak;

      // 🟢 active session timer
      if (isSessionRunning && session.startTime) {
        const elapsed = Math.floor((now - new Date(session.startTime)) / 1000);
        currentTime += elapsed;
      }

      // 🟡 break timer
      if (isBreakRunning && session.breakStartTime) {
        const elapsed = Math.floor((now - new Date(session.breakStartTime)) / 1000);
        currentBreak += elapsed;
      }

      setTime(currentTime);
      setBreakTime(currentBreak);

    }, 1000);

    return () => clearInterval(interval);
  }, [session, baseTime, baseBreak, isSessionRunning, isBreakRunning]);

  //! complete session
  useEffect(() => {
    const complete = async () => {
      if (session && time >= session.duration * 60 && session.status !== "completed" && !isCompleted) {
        setIsCompleted(true);
        try{
          await completeSession(session._id);
          alert("Session Completed!!");
        }
        catch (err) {
          console.error(err);
        }
      }
    };

    complete();
  }, [time, session, isCompleted]);

  //! formatting minutes in correct format
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${sec}`;
  }


  //! handle buttons
  //? start button
  const handleStart = async () => {
    if (!session) return;
    const res = await startSession(session._id);
    setBaseTime((res.data.durationCompleted || 0) * 60);
    setSession(res.data);

    setIsSessionRunning(true);
    setIsBreakRunning(false);
  }

  //? pause button
  const handlePause = async () => {
    if (!session) return;
    const res = await pauseSession(session._id);

    setBaseTime((res.data.durationCompleted || 0) * 60);
    setSession(res.data);

    setIsSessionRunning(false);
  }

  //? handle start and end break
  const handleBreakToggle = async () => {
    if (!session) return;

    let res;

    if (session.status !== "break" && session.status !== "active") {
      alert("No session is active");
      return;
    }

    if (isBreakRunning) {
      // end break now
      res = await endBreak(session._id);
      setBaseBreak((res.data.breakDuration || 0) * 60);

      setSession(res.data);

      setIsBreakRunning(false);
      setIsSessionRunning(false);
    }
    else {
      // start break now
      res = await startBreak(session._id);

      setBaseTime((res.data.durationCompleted || 0) * 60);
      setSession(res.data);

      setIsBreakRunning(true);
      setIsSessionRunning(false);
    }

  }


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
            {formatTime(isBreakRunning ? breakTime : time)}
          </h1>
        </div>

          {/* buttons */}
        <div className="grid grid-cols-3 gap-10 mx-8">
          <button
            onClick={handleStart}
            disabled={isSessionRunning}
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
            onClick={handlePause}
            disabled={!isSessionRunning}
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
            onClick={handleBreakToggle}
            style={{
              background: "var(--feature-icons-background)",
              color: "var(--timer-font-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="px-8 py-1 rounded-3xl font-bold m-2"
          >
            {session?.status === "break" ? "End Break" : "Break Time"}
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
          Duration Completed: {Math.floor(time / 60)} mins
        </p>
        <p
          style={{
            color: "var(--dashboard-hero-paragraph-color)",
            fontSize: "var(--dashboard-hero-paragraph-size)",
          }}
          className="font-semibold mb-6"
        >
          Break Duration: {Math.floor(breakTime / 60)} mins
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
          Session Completed : {((time / 60) / session?.duration * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}
