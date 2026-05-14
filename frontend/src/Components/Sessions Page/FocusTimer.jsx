import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { getTodaySessions } from "../../api/auth";
import { startSession } from "../../api/auth";
import { pauseSession } from "../../api/auth";
import { startBreak } from "../../api/auth";
import { endBreak } from "../../api/auth";
import { completeSession } from "../../api/auth";
import { getSession } from "../../api/auth";
import { toast } from "react-toastify";

import { formatTimer } from "../../utils/formatTimer";
import { formatDuration } from "../../utils/formatDuration";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

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

  const toastShown = useRef(false);

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
            if (!toastShown.current) {
              toast.error("No sessions for today");
              toastShown.current = true;
            }

            return;
          }

          setSession(res.data.defaultSession);
        }

      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchSessions();
  }, [id]);

  //! for setting the correct time even after reloading the page
  useEffect(() => {
    if (session) {
      setBaseTime(session.durationCompleted || 0);
      setBaseBreak(session.breakDuration || 0);
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
        const elapsed = Math.floor(
          (now - new Date(session.breakStartTime)) / 1000,
        );
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
      if (session && time >= session.duration && !isCompleted) {
        setIsCompleted(true);
        try {
          await completeSession(session._id);
          toast.success("Session Completed!!");
        } catch (err) {
          console.error(err);
        }
      }
    };

    complete();
  }, [time, session, isCompleted]);

  //! handle buttons
  //? start button
  const handleStart = async () => {
    if (!session) return;
    const res = await startSession(session._id);
    setBaseTime(res.data.durationCompleted || 0);
    setSession(res.data);

    setIsSessionRunning(true);
    setIsBreakRunning(false);
  };

  //? pause button
  const handlePause = async () => {
    if (!session) return;

    if (!isSessionRunning) {
      toast.info("Start session first");
      return;
    }

    const res = await pauseSession(session._id);

    setBaseTime(res.data.durationCompleted || 0);
    setSession(res.data);

    setIsSessionRunning(false);
  };

  //? handle start and end break
  const handleBreakToggle = async () => {
    if (!session) return;

    let res;

    if (!isSessionRunning && !isBreakRunning) {
      toast.info("No session is active");
      return;
    }

    if (isBreakRunning) {
      // end break now
      res = await endBreak(session._id);
      setBaseBreak(res.data.breakDuration || 0);

      setSession(res.data);

      setIsBreakRunning(false);
      setIsSessionRunning(false);
    } else {
      // start break now
      res = await startBreak(session._id);

      setBaseTime(res.data.durationCompleted || 0);
      setSession(res.data);

      setIsBreakRunning(true);
      setIsSessionRunning(false);
    }
  };

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="min-h-screen flex flex-col mt-10 px-3 sm:px-6 md:px-10 py-6 sm:py-10"
    >
      {/* main heading */}
      <motion.h2
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--dashboard-hero-paragraph-color)",
          fontSize: "var(--login-heading-size)",
        }}
        className="font-bold text-center py-6 sm:py-10 px-2"
      >
        FOCUS TIMER
      </motion.h2>
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.3 }}
        style={{ background: "var(--card-color-1)" }}
        className="text-center max-w-sm sm:max-w-md md:max-w-2xl mx-auto rounded-3xl px-4 sm:px-4 py-3 sm:py-4"
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
          className="mx-1 sm:mx-4 md:mx-6 mb-6 mt-4 rounded-3xl"
        >
          <h1
            style={{
              fontSize: "var(--timer-font-size)",
              color: "var(--timer-font-color)",
            }}
            className="font-bold px-4 sm:px-8 py-6 sm:py-8 text-xl sm:text-3xl md:text-4xl"
          >
            {formatTimer(isBreakRunning ? breakTime : time)}
          </h1>
        </div>

        {/* buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-6">
          <button
            onClick={handleStart}
            disabled={isSessionRunning}
            style={{
              background: "var(--feature-icons-background)",
              color: "var(--timer-font-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="px-4 sm:px-6 py-2 w-full rounded-3xl font-bold"
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
            className="px-4 sm:px-6 py-2 w-full rounded-3xl font-bold"
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
            className="px-4 sm:px-6 py-2 w-full rounded-3xl font-bold"
          >
            {isBreakRunning ? "End Break" : "Break Time"}
          </button>
        </div>

        {/* duration and break related text */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-6 text-center">
          <p
            style={{
              color: "var(--dashboard-hero-paragraph-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="font-semibold mb-6"
          >
            Duration Completed: {formatDuration(time)}
          </p>
          <p
            style={{
              color: "var(--dashboard-hero-paragraph-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="font-semibold mb-6"
          >
            Break Duration: {formatDuration(breakTime)}
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
      </motion.div>

      {/* progress bar of current session */}
      <div>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.5 }}
          style={{
            color: "var(--dashboard-hero-heading-color)",
            fontSize: "var(--dashboard-hero-subheading-size)",
          }}
          className="font-bold px-3 sm:px-6 py-6 text-center"
        >
          Session Completed : {((time / session?.duration) * 100).toFixed(1)}%
        </motion.p>
      </div>
    </div>
  );
}
