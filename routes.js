const {Router} = require("express");
const controller = require("./controller.js");
const router = Router();

// Home Route:
router.get("/", controller.homePage);

// New Message Form Route:
router.get("/new", controller.formPage);

// Handle posting a message.
router.post("/new", controller.newMessage);

module.exports = router;
