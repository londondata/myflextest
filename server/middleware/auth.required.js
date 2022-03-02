// jwt middle ware for verification
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  console.log(req.headers.authorization)
  try {
    // grab token
    const bearerHeader = req.headers.authorization;
    console.log(bearerHeader, "BEARER HEADER")
    // if no token
    if (typeof bearerHeader === "undefined") {
      return res.sendStatus(403);
    }

    // if there is a token
    const token = bearerHeader.split(".")[1];
    console.log(token)
    const payload = await jwt.verify(token, "hailsatan");
    console.log(payload)
    req.userId = payload._id;

    next();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error :(( Sowwy" });
  }
};