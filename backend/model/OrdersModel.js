 const { model } = require ("mongoose");

 const {OrdersSchema} = require ('../schema/OrdersSchema');

 const OrdersModel = new model ("holding", OrdersSchema);

 module.exports= { OrdersModel };
 