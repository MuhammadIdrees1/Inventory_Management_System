const Products = require("../models/Products");
const SalesDetails = require("../models/SalesDetails");
const Store = require("../models/Store");

// add Sales details
const add_Sales_Details = async (req, res) => {
  const { productId, storeId, userId } = req.params;
  const { date, price, quantity } = req.body;
  try {
    // Find the product by ID
    const product = await Products.findById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    // Find the store by ID
    const stores = await Store.findById(storeId);
    if (!stores) {
      res.status(404).json({ message: "Store not found" });
    }

    const newSale = new SalesDetails({
      store: stores._id,
      storeName: stores.store,
      userId: userId,
      product: product._id,
      productName: product.name,
      date: date,
      price: price,
      quantity: quantity,
    });

    const Sales_Details = await newSale.save();

    product.stock -= quantity;

    await product.save();
    res.status(201).json({
      message: "Sales details added successfully",
      Sales_Details,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};

// Get All Sales details
const all_Sales_details = async (req, res) => {
  const { userId } = req.params;
  try {
    const sales_details = await SalesDetails.find({ userId });
    res.status(200).json(sales_details);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching details" });
  }
};

// Delete sale
const delete_Sales_Details = async (req, res) => {
  console.log(req.params.id);
  try {
    const sale = await SalesDetails.findByIdAndDelete(req.params.id);
    if (!sale) {
      res.status(404).json({ message: "Sale not found" });
    }
    res.status(200).json({ message: "Sales deleted successfully", sale });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  add_Sales_Details,
  all_Sales_details,
  delete_Sales_Details,
};
