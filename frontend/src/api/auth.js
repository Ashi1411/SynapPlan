import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.BACKEND_URL,
    withCredentials: true
})

export const signup = (data) => API.post("/signup", data)
export const login = (data) => API.post("/login", data)