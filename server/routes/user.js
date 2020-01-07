const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ email: "No user with the provided email address was found" });
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin
        };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ token });
          }
        );
      } else {
        return res.status(400).json({ password: "Passoword incorrect" });
      }
    });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
