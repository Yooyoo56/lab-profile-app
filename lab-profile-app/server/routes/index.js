const router = require("express").Router();
const authRoutes = require("./auth");
const User = require("../models/User.model.js");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render('index');
});

router.use("/auth", authRoutes);

module.exports = router;
