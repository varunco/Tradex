import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div>
      <div className="container p-5">
        <div className="row text-center">
          <h1 className="mt-5">Open Account</h1>

          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&O trades.
          </p>

          <Link to="/signup">
            <button
              className="p-1 btn btn-primary fs-5 mb-5"
              style={{ width: "15%", margin: "0 auto" }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;