const router = require("express").Router();
const {
  add_Purchase_Details,
  get_Purchase_Details,
} = require("../controller/purchaseController");

router.post("/:productId/purchase", add_Purchase_Details);
router.get("/", get_Purchase_Details);

module.exports = router;
