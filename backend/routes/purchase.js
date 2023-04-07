const router = require("express").Router();
const {
  add_Purchase_Details,
  all_purchase_details,
  delete_purchase,
} = require("../controller/purchaseController");
router.post("/:productId/:userId", add_Purchase_Details);
router.get("/:userId", all_purchase_details);
router.delete("/:id", delete_purchase);

module.exports = router;
