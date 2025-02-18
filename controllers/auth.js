const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user.js");


router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs");
  });
  

  router.post("/sign-up", async (req, res) => {
    const userInDatabase = await User.findone({
        username: req.body.username
    }); if (userInDatabase) {
        return res.send('Username already taken')
    } if (req.body.password !== req.body.confirmPassword) {
        return res.send("Password and Confirm Password must match");
      } 
      
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
req.body.password = hashedPassword;

// validation logic

const user = await User.create(req.body);
res.send(`Thanks for signing up ${user.username}`);

    res.send("Form submission accepted!");
  });
  
  
module.exports = router;
