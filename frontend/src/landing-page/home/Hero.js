import React from "react";
import { Link } from "react-router-dom";

function Hero() {
return ( <div> <div className="container p-5"> <div className="row text-center">
      <video
        className="mb-5"
        width="100%"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./media/Treadex.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="mt-5">Invest In Everything.</h1>

      <p>
        Online platform to invest in stocks, derivatives and more...
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

export default Hero;
