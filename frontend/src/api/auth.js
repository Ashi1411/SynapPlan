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


