const router = require("express").Router();
const user_create = require("../controller/userController");

router.post("/", user_create);

module.exports = router;
