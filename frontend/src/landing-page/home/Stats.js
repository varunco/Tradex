import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center py-5">

        {/* LEFT SIDE */}
        <div className="col-md-6 mb-5">

          <h1 className="mb-4 fs-2">Trade with confidence</h1>

          <h2 className="fs-4">Built for modern investors</h2>
          <p className="text-muted mb-4">
            SB-Stocks is designed to make stock trading simple and accessible.
            Whether you're a beginner or an experienced trader, our platform
            provides the tools you need to analyze markets, place trades, and
            manage your investments effectively.
          </p>

          <h2 className="fs-4">Clean and distraction-free experience</h2>
          <p className="text-muted mb-4">
            We focus on clarity and simplicity. The interface is built to help
            users focus on trading and investing without unnecessary clutter,
            spam notifications, or complicated workflows.
          </p>

          <h2 className="fs-4">Powerful trading tools</h2>
          <p className="text-muted mb-4">
            From real-time market information to portfolio tracking and order
            management, SB-Stocks offers a set of tools that help you monitor
            market movements and make informed decisions.
          </p>

          <h2 className="fs-4">Helping users grow financially</h2>
          <p className="text-muted">
            Our goal is to empower users with technology that makes investing
            easier to understand, helping traders build confidence while
            managing their portfolios over time.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 text-center">

          <img
            src="media/Conversation-cuate.svg"
            alt="SB Stocks platform"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />

          <div className="text-center">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore SB-Stocks features
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;