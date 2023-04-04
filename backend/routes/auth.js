const auth_user = require("../controller/authController");
const { checkUser } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/", checkUser);

module.exports = router;
