const router = require("express").Router();
const {
  all_products,
  add_products,
  update_products,
  delete_products,
  single_product,
  // add_Purchase_Details,
} = require("../controller/productsController");

router.post("/", add_products);
router.get("/", all_products);
router.get("/:id", single_product);
router.put("/:id", update_products);
router.delete("/:id", delete_products);
// router.post("/:productId/purchase", add_Purchase_Details);

module.exports = router;
