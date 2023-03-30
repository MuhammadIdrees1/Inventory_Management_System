const Store = require("../models/Store");

// add Store
const add_Store = async (req, res) => {
  try {
    const stores = new Store({
      store: req.body.store,
      address: req.body.store,
    });
    const addStore = await stores.save();
    res.send(addStore);
  } catch (error) {
    console.log(error);
  }
};

// get store
const get_Store = async (req, res) => {
  try {
    const allStores = await Store.find();
    res.send(allStores);
  } catch (error) {
    console.log(error);
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
    res.json(store);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete store
const delete_Store = async (req, res) => {
  try {
    const deleteStore = await Store.findByIdAndDelete(req.params.id);
    res.send(deleteStore);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add_Store, get_Store, delete_Store, update_Store };
