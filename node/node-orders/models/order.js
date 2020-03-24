const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    id: String,
    name: {
      type: String,
      required: true
    },
    OrderDate: Date,
    status: String,
    shippingFee: Number,
    total :Number
  }
)

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;