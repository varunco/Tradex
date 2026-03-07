import React from "react";

function Brokerage() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Charges</h2>
        <p className="text-muted">
          Transparent pricing with no hidden fees.
        </p>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button className="nav-link active">Equity</button>
        </li>
      </ul>

      {/* Charges Table */}
      <div className="table-responsive mb-5">
        <table className="table table-bordered text-center">

          <thead className="table-light">
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="fw-bold">Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20/order</td>
              <td>0.03% or ₹20/order</td>
              <td>Flat ₹20 per order</td>
            </tr>

            <tr>
              <td className="fw-bold">STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on sell</td>
              <td>0.02% on sell</td>
              <td>0.1% on sell (premium)</td>
            </tr>

            <tr>
              <td className="fw-bold">Transaction charges</td>
              <td>NSE: 0.00307%</td>
              <td>NSE: 0.00307%</td>
              <td>NSE: 0.00183%</td>
              <td>NSE: 0.03503%</td>
            </tr>

            <tr>
              <td className="fw-bold">GST</td>
              <td colSpan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="fw-bold">SEBI charges</td>
              <td colSpan="4">₹10 / crore</td>
            </tr>

            <tr>
              <td className="fw-bold">Stamp charges</td>
              <td>0.015% or ₹1500/crore</td>
              <td>0.003% or ₹300/crore</td>
              <td>0.002% or ₹200/crore</td>
              <td>0.003% or ₹300/crore</td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Account Opening Charges */}
      <div className="mb-4">
        <h4 className="mb-3">Charges for account opening</h4>

        <table className="table table-bordered">

          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td className="text-success fw-bold">FREE</td>
            </tr>

            <tr>
              <td>Offline account</td>
              <td className="text-success fw-bold">FREE</td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td>₹500</td>
            </tr>

            <tr>
              <td>Partnership / LLP / Corporate account</td>
              <td>₹500</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Brokerage;