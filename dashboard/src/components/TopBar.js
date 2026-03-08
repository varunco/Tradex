import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (

    <div className="container-fluid bg-dark border-bottom">

      <div className="row align-items-center py-2">

        {/* Market indices */}
        <div className="col-md-3 d-flex justify-content-around text-light">

          <div>
            <small className="text-secondary">NIFTY 50</small>
            <div className="text-danger fw-semibold">100.2</div>
          </div>

          <div>
            <small className="text-secondary">SENSEX</small>
            <div className="text-danger fw-semibold">100.2</div>
          </div>

        </div>

        {/* Menu area */}
        <div className="col-md-9">
          <Menu />
        </div>

      </div>

    </div>

  );
};

export default TopBar;