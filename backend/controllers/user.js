const User = require("../models/user");
const {setUser, hashPassword, comparePassword, getUser} = require("../services/auth");

//! Create a new user
async function handleUserSignup(req, res) {
    const {fullname, email, password} = req.body;

    try{
        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            fullname,
            email,
            password : hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "Signup Successful",
            user
        });
    }
    catch (err) {
        //! duplicate email -> means email already exists
        if (err.code == 11000) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            })
        }

        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
    
}

//! login a user
async function handleUserLogin(req, res) {
    const {email, password} = req.body;
    const isPasswordValid = await comparePassword(email, password);

    if (!isPasswordValid) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        });
    }

    const user = await User.findOne({email});
    console.log(user);

    const token = setUser(user);
    //? sent via cookie
    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    return res.json({
        success: true,
        message: "Login Successful",
        user: {
            id: user._id,
            email: user.email,
            fullname: user.fullname
        }
    });
}

//! checking if the user is logged in or not
async function handleGetCurrentUser(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            authenticated: false
        });
    }

    try{
        const user = getUser(token);

        return res.json({
            authenticated: true,
            user
        });
    }
    catch(err) {
        return res.status(401).json({
            authenticated: false
        });
    }
}

module.exports = {handleUserSignup, handleUserLogin, handleGetCurrentUser};