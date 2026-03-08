const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId:String,
  name: String,
  qty: Number,
  price: Number,
  mode: String
});

const OrdersModel = mongoose.model("orders", OrdersSchema);

module.exports = { OrdersModel };