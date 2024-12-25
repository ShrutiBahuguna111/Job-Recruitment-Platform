import React from "react";
import { useNavigate } from "react-router-dom";

function JobListings() {
  const navigate = useNavigate(); // Hook for navigation

  // Sample list of jobs
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "TechCorp",
      location: "New York, NY",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataWorld",
      location: "Austin, TX",
    },
    {
      id: 4,
      title: "Project Manager",
      company: "BuildCo",
      location: "Chicago, IL",
    },
  ];

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
          background: "linear-gradient(135deg, #ffe3b3 0%, #fff6da 100%)", // Subtle yellow gradient
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="card"
          style={{
            width: "600px",
            borderRadius: "15px",
            background: "#fff",
            padding: "20px",
          }}
        >
          <h2 className="text-center text-primary mb-4" style={{ fontWeight: "bold" }}>
            Job Listings
          </h2>
          <ul className="list-group">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="list-group-item"
                style={{
                  borderRadius: "10px",
                  marginBottom: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h5 className="mb-1">{job.title}</h5>
                <p className="mb-1">
                  <strong>Company:</strong> {job.company}
                </p>
                <p className="mb-0">
                  <strong>Location:</strong> {job.location}
                  <button
                    className="btn btn-link text-primary p-0 ms-3"
                    onClick={() => navigate(`/jobs/${job.id}`)} // Navigate to Job Details
                  >
                    View Details
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobListings;
