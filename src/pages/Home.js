import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa", 
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(135deg, #ffd6e7 0%, #ffecf3 100%)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="card text-center"
          style={{
            width: "500px",
            borderRadius: "15px",
            background: "#fff",
            padding: "20px",
          }}
        >
          <div className="card-body">
            <h2 className="text-primary" style={{ fontWeight: "bold" }}>
              Welcome to TalentConnect
            </h2>
            <p className="mt-3 text-secondary" style={{ fontSize: "16px" }}>
              Your gateway to finding and posting jobs seamlessly. Let’s get started!
            </p>
            <button
              className="btn btn-primary mt-4"
              style={{
                borderRadius: "10px",
                padding: "10px 20px",
                fontSize: "16px",
              }}
              onClick={() => navigate("/login")} 
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
