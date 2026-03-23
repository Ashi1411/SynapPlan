const express = require("express");
const cookieParser = require("cookie-parser");

//! importing .env file
require("dotenv").config();

//! database connection import
const {connectToMongoDB} = require("./connection/connect");

//! schemas import


//! authentication import -> middleware
const {checkForAuthentication} = require("./middlewares/auth");

//! to connect with frontend -> we will use cors
const cors = require("cors");

//! routes import
const userRoute = require("./routes/user");
const sessionRoutes = require("./routes/sessionRoutes");

//! port details
const app = express();
const PORT = process.env.PORT || 8000;


//! database connection
connectToMongoDB(process.env.MONGODB_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error", err));


//! middlewares
app.use(express.json()) //? supports json data
app.use(express.urlencoded({extended: false})); //? supports form data
app.use(cookieParser()); //? to parse the components of cookie
app.use(checkForAuthentication);//? authentication middleware

//! to connect with frontend
app.use(cors({
    origin: process.env.FRONTEND_PORT,
    credentials: true
}))


//! calling routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api", userRoute);
app.use("/api/session", sessionRoutes);



app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));