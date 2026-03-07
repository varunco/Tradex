import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5">
      <h2 className="text-muted mb-5">
        Create a support ticket by selecting a topic
      </h2>

      <div className="row g-4">

        {/* Account */}
        <div className="col-md-4">
          <h5 className="mb-3">
            <i className="fa fa-user-circle me-2"></i> Account
          </h5>

          <ul className="list-unstyled ticket-links">
            <li><a href="">Create account</a></li>
            <li><a href="">Account verification</a></li>
            <li><a href="">Update profile</a></li>
            <li><a href="">Account security</a></li>
          </ul>
        </div>

        {/* Dashboard */}
        <div className="col-md-4">
          <h5 className="mb-3">
            <i className="fa fa-dashboard me-2"></i> Dashboard
          </h5>

          <ul className="list-unstyled ticket-links">
            <li><a href="">Using the dashboard</a></li>
            <li><a href="">Analytics & reports</a></li>
            <li><a href="">Data issues</a></li>
            <li><a href="">Performance problems</a></li>
          </ul>
        </div>

        {/* Payments */}
        <div className="col-md-4">
          <h5 className="mb-3">
            <i className="fa fa-credit-card me-2"></i> Payments
          </h5>

          <ul className="list-unstyled ticket-links">
            <li><a href="">Billing issues</a></li>
            <li><a href="">Refund requests</a></li>
            <li><a href="">Payment methods</a></li>
            <li><a href="">Invoices</a></li>
          </ul>
        </div>

        {/* Features */}
        <div className="col-md-4">
          <h5 className="mb-3">
            <i className="fa fa-cogs me-2"></i> Features
          </h5>

          <ul className="list-unstyled ticket-links">
            <li><a href="">Feature request</a></li>
            <li><a href="">Bug report</a></li>
            <li><a href="">Integration help</a></li>
          </ul>
        </div>

        {/* Technical */}
        <div className="col-md-4">
          <h5 className="mb-3">
            <i className="fa fa-wrench me-2"></i> Technical Issues
          </h5>

          <ul className="list-unstyled ticket-links">
            <li><a href="">Login problems</a></li>
            <li><a href="">App errors</a></li>
            <li><a href="">Slow performance</a></li>
          </ul>
        </div>

        {/* General */}
        <div className="col-md-4">
          <h5 className="mb-3">
            <i className="fa fa-question-circle me-2"></i> General
          </h5>

          <ul className="list-unstyled ticket-links">
            <li><a href="">Getting started</a></li>
            <li><a href="">Documentation</a></li>
            <li><a href="">Contact support</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;