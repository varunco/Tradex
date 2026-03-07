import React from "react";

function Footer() {
  return (
    <footer className="container mt-5 border-top pt-5">
      <div className="row">

        <div className="col-md-4">
          <p className="fw-bold mb-3">Support</p>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Contact us
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Support portal
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            How to file a complaint?
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Status of your complaints
          </a>
        </div>

        <div className="col-md-4">
          <p className="fw-bold mb-3">Company</p>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            About
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Careers
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Press
          </a>
        </div>

        <div className="col-md-4">
          <p className="fw-bold mb-3">Quick Links</p>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Products
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Pricing
          </a>

          <a className="d-block mb-2 text-muted text-decoration-none" href="">
            Support
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;