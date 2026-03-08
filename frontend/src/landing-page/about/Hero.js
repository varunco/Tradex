import React from "react";

function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">
            About Our Platform
          </h1>

          <p className="text-muted mb-3">
            Our platform is designed to make investing simple, accessible, and
            efficient for everyone. Whether you're just getting started or
            already experienced, we provide the tools and insights needed to
            manage your investments confidently.
          </p>

          <p className="text-muted">
            With a clean interface, powerful analytics, and transparent pricing,
            we help users focus on what truly matters — making better financial
            decisions.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="media/About me-cuate.svg"
            alt="About"
            style={{ width: "80%" }}
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;