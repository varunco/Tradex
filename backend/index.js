require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel} = require ("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

mongoose.connect(uri)
.then(() => {
    console.log("DB connected");

    app.listen(PORT, () => {
        console.log("Server running on port " + PORT);
    });
})
.catch(err => console.log(err));

// app.get("/addPositions", async (req, res) => {

// let tempHoldings = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];


// try {

//     await PositionsModel.insertMany(tempHoldings);

//     res.send("All 13 holdings inserted");

// } catch(err){

//     console.log(err);
//     res.send("Error inserting holdings");

// }

// });