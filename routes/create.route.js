const express = require("express");
const router  = express.Router();
const createProfile = require("../controllers/create.controller");

router.post("/create", createProfile);

module.exports = router;