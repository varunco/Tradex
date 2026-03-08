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

/* ================= DATABASE ================= */

mongoose.connect(process.env.MONGO_URL)
.then(()=>{

  console.log("DB connected");

  app.listen(PORT,()=>{
    console.log("Server running on port " + PORT);
  });

})
.catch(err=>console.log(err));


/* ================= USER HOLDINGS ================= */

app.get("/allHoldings/:userId", async (req,res)=>{

  try{

    const holdings = await HoldingsModel.find({
      userId:req.params.userId
    });

    res.json(holdings);

  }catch(err){
    res.status(500).json({message:"Error fetching holdings"});
  }

});


/* ================= USER ORDERS ================= */

app.get("/allOrders/:userId", async (req,res)=>{

  try{

    const orders = await OrdersModel.find({
      userId:req.params.userId
    });

    res.json(orders);

  }catch(err){
    res.status(500).json({message:"Error fetching orders"});
  }

});


/* ================= USER POSITIONS ================= */

app.get("/allPositions/:userId", async (req,res)=>{

  try{

    const positions = await PositionsModel.find({
      userId:req.params.userId
    });

    res.json(positions);

  }catch(err){
    res.status(500).json({message:"Error fetching positions"});
  }

});


/* ================= CREATE NEW ORDER ================= */

app.post("/newOrder", async (req,res)=>{
console.log("Incoming Order:", req.body);

  try{

    const {userId,name,qty,price,mode} = req.body;

    if(!userId){
      return res.status(400).json({
        message:"UserId required"
      });
    }

    const newOrder = new OrdersModel({

      userId:userId,
      name:name,
      qty:qty,
      price:price,
      mode:mode

    });

    await newOrder.save();

    res.json({
      message:"Order saved successfully"
    });

  }catch(err){

    console.log(err);

    res.status(500).json({
      message:"Error saving order"
    });

  }

});/* ================= SIGNUP ================= */

app.post("/signup", async (req,res)=>{

  try{

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

  }catch(err){

    res.status(500).json({
      message:"Signup error"
    });

  }

});


/* ================= LOGIN ================= */

app.post("/login", async (req,res)=>{

  try{

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

  }catch(err){

    res.status(500).json({
      message:"Login error"
    });

  }

});


/* ================= DEMO USER ================= */

app.get("/demoUser", (req,res)=>{

  res.json({

    username:"Guest",
    userId:"demo-user"

  });

});