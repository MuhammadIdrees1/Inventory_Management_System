const Products = require("../models/Products");
const purchaseDetails = require("../models/PurchaseDetails");

const add_Purchase_Details = async (req, res) => {
  const { productId } = req.params;
  try {
    // Find the product by ID
    const product = await Products.findById(productId);

    const newPurchase = {
      product: product._id,
      date: req.body.date,
      quantity: req.body.quantity,
    };

    const Purchase_Details = await purchase.save(purchase);
    res.send(Purchase_Details);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};

const get_Purchase_Details = async (req, res) => {
  try {
    const getPurchaseDetails = await purchase.find();
    res.send(getPurchaseDetails);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add_Purchase_Details, get_Purchase_Details };
