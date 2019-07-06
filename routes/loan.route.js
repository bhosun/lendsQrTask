const express = require("express");
const router  = express.Router();
const getLoan = require("../controllers/loan.controller");

router.get("/loans", getLoan);

module.exports = router;