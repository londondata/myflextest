const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });

    if (foundUser) {
        //exponential randomization of a string (num) of times
        //the more salt, the longer it takes. 8-10 is a sweet spot!
        const salt = await bcrypt.genSalt(10);
        //hasing takes that salted password and gives it a different value
        //ex. "password" may look something like "t5h2uuuuw4h3@f" if its not salted. Easy to decode! Not very safe. p = t5, a = h2, etc
        const hash = await bcrypt.hash(req.body.password, salt);
        const updatedUser = await db.User.findByIdAndUpdate(
            {_id: foundUser._id},
            {
                $set: { password: hash }
            },
            {new: true} 
        );
        return res
        .status(201)
        .json({ status: 201, message: "success", updatedUser });
    }
      return res.status(400).json({
        status: 400,
        message: "Email address not in the database. Please try again!",
      });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Site broke or something. Oop. Please try again",
    });
  }
};

const login = async (req, res) => {
  try {
      //select(+password) to include the password in our search to we can login user
    const foundUser = await db.User.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (!foundUser) {
      return res
        .status(400)
        .json({ status: 400, message: "Username or password is wrong, Homie :((" });
    }

    const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
    // check if the passwords match
    if (isMatch) {
      // jwt.sign(payload, secret key for signing, config object)
      //signature ensures that the token hasn't been altered, and we sign off on that with our secret key
      const token = jwt.sign({ _id: foundUser._id }, "hailsatan", {
        expiresIn: "3h",
      });

      return res.status(200).json({
        status: 200,
        message: "success",
        token,
      });
    } else {
      // the password provided does not match the password on file.
      return res.status(400).json({
        status: 400,
        message: "Username or password is wrong, Homie :((",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Site broke or something. Oop. Please try again",
    });
  }
};

module.exports = {
  register,
  login,
};