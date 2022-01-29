const router = require('express').Router();
const authRoutes = require('./auth');
const user = require('../models/User.model');
const isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.use('/auth', authRoutes);

module.exports = router;
