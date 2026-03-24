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

