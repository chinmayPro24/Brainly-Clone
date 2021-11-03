const express = require("express");
const websiteController = require("../controller/websiteController");
const router = express.Router();

router.get("/", websiteController.home);

router.get("/login", websiteController.login);

router.get("/newQuery", websiteController.newQuery);

module.exports = router;
