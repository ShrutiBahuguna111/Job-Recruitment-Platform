import React from "react";

function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
      }}
    >
      <div
        className="card shadow-lg"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <div className="card-body text-center">
          <h2 className="text-danger">404 - Page Not Found</h2>
          <p className="mt-3 text-secondary">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
