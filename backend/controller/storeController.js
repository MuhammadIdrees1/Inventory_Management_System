const Store = require("../models/Store");

// add Store
const add_Store = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const stores = new Store({
      userId: userId,
      store: req.body.store,
      address: req.body.store,
    });
    const addStore = await stores.save();
    res.status(201).json({ message: "Store added successfully", addStore });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// get store
const get_Store = async (req, res) => {
  const { userId } = req.params;
  try {
    const allStores = await Store.find({ userId });
    res.send(allStores);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const update_Store = async (req, res) => {
  console.log(req.params.productId, req.body);
  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      {
        store: req.body.store,
        address: req.body.store,
      },
      { new: true }
    );
    res.status(200).json({ message: "Store updated successfully", store });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete store
const delete_Store = async (req, res) => {
  try {
    const deleteStore = await Store.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "Store deleted successfully", deleteStore });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { add_Store, get_Store, delete_Store, update_Store };
