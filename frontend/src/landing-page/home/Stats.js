import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center py-5">

        {/* LEFT SIDE */}
        <div className="col-md-6 mb-5">

          <h1 className="mb-4 fs-2">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker and
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, gamification, or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions but actively help you do better with your money.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 text-center">

          <img
            src="media/Conversation-cuate.svg"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />

          <div className="text-center">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;