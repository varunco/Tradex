import React from "react";

function SupportHero() {
  return (
    <section className="hero-section">
      <div className="container text-center py-5">

        <h1 className="fw-bold mb-3">
          How can we help you?
        </h1>

        <p className="text-muted mb-4">
          Search our help center or create a support ticket.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
              <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search for articles, topics, or issues..."
              />
            </div>
        </div>

      </div>
    </section>
  );
}

export default SupportHero;