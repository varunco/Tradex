import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center" style={{ marginTop: "120px" }}>
      
      <h1 style={{ fontSize: "120px", fontWeight: "700", color: "#387ed1" }}>
        404
      </h1>

      <h3 className="mb-3">Page Not Found</h3>

      <p className="text-muted mb-4">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="btn btn-primary px-4 py-2"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;