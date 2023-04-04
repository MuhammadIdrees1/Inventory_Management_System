const router = require("express").Router();
const {
  add_Sales_Details,
  all_Sales_details,
} = require("../controller/salesController");
router.post("/:productId", add_Sales_Details);
router.get("/", all_Sales_details);

module.exports = router;
