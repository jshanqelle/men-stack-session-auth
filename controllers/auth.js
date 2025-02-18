const express = require("express");
const router = express.Router();
const User = require("../models/user.js");


router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs");
  });
  

  router.post("/sign-up", async (req, res) => {
    res.send("Form submission accepted!");
  });
  
module.exports = router;
