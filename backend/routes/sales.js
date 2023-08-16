const router = require("express").Router();
const {
  add_Sales_Details,
  all_Sales_details,
  delete_Sales_Details,
} = require("../controller/salesController");
router.post("/:userId/:storeId/:productId", add_Sales_Details);
router.get("/:userId", all_Sales_details);
router.delete("/:id", delete_Sales_Details);

module.exports = router;
