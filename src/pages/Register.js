import React from "react";

function Register() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa", // Light background
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(135deg, #d3f5d1 0%, #ecfdf5 100%)", // Greenish gradient
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="card text-center"
          style={{
            width: "400px",
            borderRadius: "15px",
            background: "#fff",
            padding: "20px",
          }}
        >
          <div className="card-body">
            <h2 className="text-primary" style={{ fontWeight: "bold" }}>
              Register
            </h2>
            <p className="mt-3 text-secondary">
              Create an account to start your journey with TalentConnect.
            </p>
            <form>
              <input
                type="text"
                className="form-control my-3"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="form-control my-3"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="Password"
              />
              <button
                className="btn btn-primary w-100"
                style={{ borderRadius: "10px" }}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
