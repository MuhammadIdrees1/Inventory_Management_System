const mongoose = require("mongoose");

const PurchaseDetailsSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    productName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const PurchaseDetails = mongoose.model(
  "PurchaseDetails",
  PurchaseDetailsSchema
);
module.exports = PurchaseDetails;
