const express = require("express");
const { register, login, isUserAlreadyExist } = require("../controllers/user");
const router = express.Router();

// POST routes for register, login, and checking if user already exists
router.post("/register", register);
router.post("/login", login);
router.post("/isUserAlreadyExist", isUserAlreadyExist);

module.exports = router;
