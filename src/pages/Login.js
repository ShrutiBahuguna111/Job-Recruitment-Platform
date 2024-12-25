import React from "react";

function Login() {
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
          background: "linear-gradient(135deg, #cdeffb 0%, #eafaff 100%)", // Subtle blue gradient
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
              Login
            </h2>
            <p className="mt-3 text-secondary">
              Access your account to apply for jobs or manage postings.
            </p>
            <form>
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
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
