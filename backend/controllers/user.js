const User = require("../models/user");
const {setUser, hashPassword, comparePassword} = require("../services/auth");

async function handleUserSignup(req, res) {
    const {fullname, email, password} = req.body;

    const hashedPassword = await hashPassword(password);

    await User.create({
        fullname,
        email,
        password : hashedPassword
    });

    res.redirect("/dashboard");
}

async function handleUserLogin(req, res) {
    const {email, password} = req.body;
    const isPasswordValid = await comparePassword(email, password);

    if (!isPasswordValid) {
        return res.render("login", {
            error: "Invalid Username or Password"
        });
    }

    const user = await User.findOne({email});
    console.log(user);

    const token = setUser(user);
    //? sent via cookie
    res.cookie("token", token);
    return res.redirect("/dashboard");
}


module.exports = {handleUserSignup, handleUserLogin};