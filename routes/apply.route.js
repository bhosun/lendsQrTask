const express = require("express");
const router  = express.Router();
const apply = require("../controllers/apply.controller");

router.post("/apply", apply);

module.exports = router;