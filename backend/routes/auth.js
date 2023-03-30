const auth_user = require("../controller/authController");

const router = require("express").Router();

router.post("/", auth_user);

module.exports = router;
