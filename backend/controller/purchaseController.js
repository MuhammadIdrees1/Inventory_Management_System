const Products = require("../models/Products");
const PurchaseDetails = require("../models/PurchaseDetails");

// add purchase details
const add_Purchase_Details = async (req, res) => {
  const { productId } = req.params;
  const { date, price, quantity } = req.body;
  try {
    // Find the product by ID
    const product = await Products.findById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const newPurchase = new PurchaseDetails({
      productId: product._id,
      productName: product.name,
      date: date,
      price: price,
      quantity: quantity,
    });

    const Purchase_Details = await newPurchase.save();
    console.log(typeof quantity);
    console.log(typeof product.stock);

    product.stock = 0;
    product.stock += quantity;
    product.price = 0;
    product.price += price;

    product.purchaseHistory.push(Purchase_Details._id);
    await product.save();
    res.status(201).json({
      message: "Purchase details added successfully",
      Purchase_Details,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};

// Get All purchase details
const all_purchase_details = async (req, res) => {
  try {
    const purchase_details = await PurchaseDetails.find();
    res.status(200).json(purchase_details);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching details" });
  }
};

// Delete purchase
const delete_purchase = async (req, res) => {
  console.log(req.params.id);
  try {
    const purchase = await PurchaseDetails.findByIdAndDelete(req.params.id);
    if (!purchase) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully", purchase });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  add_Purchase_Details,
  all_purchase_details,
  delete_purchase,
};
