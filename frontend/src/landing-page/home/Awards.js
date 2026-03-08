import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-lg-6 col-sm-12 p-5">
          <img 
            src="media/Awards-cuate.svg" 
            style={{ height: "80%" }} 
            alt="SB Stocks platform illustration"
          />
        </div>

        <div className="col-lg-6 col-sm-12 p-5">
          <h1>Smart trading with SB-Stocks</h1>

          <p className="mb-5">
            SB-Stocks is a modern trading platform built to simplify investing.
            It provides powerful tools, a clean interface, and real-time market
            insights to help traders make better decisions and manage their
            portfolios efficiently.
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Real-time stock market tracking</p>
                </li>
                <li>
                  <p>Interactive trading dashboard</p>
                </li>
                <li>
                  <p>Portfolio management tools</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Secure order placement</p>
                </li>
                <li>
                  <p>Market insights and analytics</p>
                </li>
                <li>
                  <p>Simple and user-friendly interface</p>
                </li>
              </ul>
            </div>

            
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;