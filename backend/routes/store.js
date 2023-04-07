const router = require("express").Router();
const {
  add_Store,
  get_Store,
  delete_Store,
  update_Store,
} = require("../controller/storeController");

router.post("/:userId", add_Store);
router.get("/:userId", get_Store);
router.delete("/:id", delete_Store);
router.put("/:id", update_Store);

module.exports = router;
