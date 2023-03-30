const mongoose = require("mongoose");

const PurchaseDetails = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const purchaseDetails = mongoose.model("PurchaseDetails", PurchaseDetails);
module.exports = purchaseDetails;
