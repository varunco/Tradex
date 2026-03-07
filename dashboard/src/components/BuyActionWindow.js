import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleBuyClick = async () => {

    const userId = localStorage.getItem("userId");

    if (!stockQuantity || !stockPrice) {
      alert("Enter quantity and price");
      return;
    }

    try {

      await axios.post("http://localhost:3002/newOrder", {

        userId,
        name: uid,
        qty: parseInt(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY"

      });

      closeBuyWindow();

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="buy-window">

      <div className="regular-order">

        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>

        </div>

      </div>

      <div className="buttons">

        <span>Margin required ₹140.65</span>

        <div>

          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>

          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;