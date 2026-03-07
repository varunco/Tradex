require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{

  console.log("DB connected");

  app.listen(PORT,()=>{
    console.log("Server running on port "+PORT);
  });

})
.catch(err=>console.log(err));


/* USER HOLDINGS */

app.get("/allHoldings/:userId", async (req,res)=>{

  const holdings = await HoldingsModel.find({
    userId:req.params.userId
  });

  res.json(holdings);

});


/* USER ORDERS */

app.get("/allOrders/:userId", async (req,res)=>{

  const orders = await OrdersModel.find({
    userId:req.params.userId
  });

  res.json(orders);

});


/* USER POSITIONS */

app.get("/allPositions/:userId", async (req,res)=>{

  const positions = await PositionsModel.find({
    userId:req.params.userId
  });

  res.json(positions);

});


/* NEW ORDER */

app.post("/newOrder", async (req,res)=>{

  const newOrder = new OrdersModel({

    userId:req.body.userId,
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode

  });

  await newOrder.save();

  res.json("Order saved");

});


/* SIGNUP */

app.post("/signup", async (req,res)=>{

  const {username,email,password} = req.body;

  const existingUser = await UserModel.findOne({
    $or:[{email},{username}]
  });

  if(existingUser){

    return res.status(400).json({
      message:"User already exists"
    });

  }

  const user = new UserModel({
    username,
    email,
    password
  });

  await user.save();

  res.json({

    message:"Signup successful",
    username:user.username,
    userId:user._id

  });

});


/* LOGIN */

app.post("/login", async (req,res)=>{

  const {email,password} = req.body;

  const user = await UserModel.findOne({
    email,
    password
  });

  if(!user){

    return res.status(401).json({
      message:"Invalid credentials"
    });

  }

  res.json({

    message:"Login success",
    username:user.username,
    userId:user._id

  });

});