const router = require("express").Router();
const {
  all_products,
  add_products,
  update_products,
  delete_products,
  single_product,
  // add_Purchase_Details,
} = require("../controller/productsController");

router.post("/:userId", add_products);
router.get("/:userId", all_products);
router.get("/:productId", single_product);
router.put("/:id", update_products);
router.delete("/:id", delete_products);
// router.post("/:productId/purchase", add_Purchase_Details);

module.exports = router;
