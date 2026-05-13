const { getUser } = require("../services/auth");

//! Authentication
function checkForAuthentication(req, res, next) {
  let tokenCookie = req.cookies?.token;
  req.user = null;

  if (!tokenCookie) {
    return next();
  }

  let user = null;
  try {
    user = getUser(tokenCookie);
  } catch (err) {
    console.error("Invalid Token", err);
  }

  req.user = user;
  return next();
}

module.exports = { checkForAuthentication };
