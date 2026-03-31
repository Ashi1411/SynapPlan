import axios from "axios"

const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/api",
    withCredentials: true
})

//! signup and login
export const signup = (data) => API.post("/signup", data);
export const login = (data) => API.post("/login", data);

//! pages
export const getDashboard = () => API.get("/dashboard");
export const getPlanner = () => API.get("/planner");
export const getAnalytics = () => API.get("/analytics");
export const addSubject = (data) => API.post("/add-subject", data);

//! session page
//? todays session + default session
export const getTodaySessions = () => API.get("/session")

//? start session
export const startSession = (id) => API.put(`/session/start/${id}`);

//? pause session
export const pauseSession = (id) => API.put(`/session/pause/${id}`);

//? start break
export const startBreak = (id) => API.put(`/session/start-break/${id}`);

//? end break
export const endBreak = (id) => API.put(`/session/end-break/${id}`);

//? complete session
export const completeSession = (id) => API.put(`/session/complete/${id}`);

//? get single session (for times)
export const getSession = (id) => API.get(`/session/${id}`);

//? get completed session summary
export const getCompletedSessions = () => API.get("/session/completed");

//? get efficiency of current completed session
export const getSessionEfficiency = (id) => API.get(`/session/efficiency/${id}`);

//! settings page
//? get user details
export const getUserDetails = () => API.get("settings/details");

//? edit profile
export const editProfile = (data) => API.put("/settings/edit", data);

export const editStudyHours = (data) => API.put("/settings/study-hours", data);

export const changePassword = (data) => API.put("/settings/change-password", data);

export const deleteAccount = () => API.delete("/settings/delete-account");



