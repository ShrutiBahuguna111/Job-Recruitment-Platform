import React from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams(); 

  // Mock job data
  const jobs = {
    1: {
      title: "Software Engineer",
      description: "Responsible for developing and maintaining web applications.",
      location: "Bangalore, India",
      salary: "₹12,00,000 per annum",
    },
    2: {
      title: "Data Scientist",
      description: "Analyze and interpret complex data to help decision-making.",
      location: "Hyderabad, India",
      salary: "₹15,00,000 per annum",
    },
    3: {
      title: "UI/UX Designer",
      description: "Design user-friendly interfaces and ensure a great user experience.",
      location: "Pune, India",
      salary: "₹9,00,000 per annum",
    },
  };

  const job = jobs[id]; // Fetch job details by ID

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {job ? (
        <div
          className="card text-center"
          style={{
            width: "500px",
            borderRadius: "15px",
            background: "#fff",
            padding: "20px",
          }}
        >
          <h2 className="text-primary">{job.title}</h2>
          <p className="mt-3 text-secondary">{job.description}</p>
          <div className="mt-4 text-left">
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <p>
              <strong>Job ID:</strong> {id}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="card text-center"
          style={{
            width: "500px",
            borderRadius: "15px",
            background: "#fff",
            padding: "20px",
          }}
        >
          <h2 className="text-danger">Job Not Found</h2>
          <p className="mt-3">
            The job with <strong>Job ID:</strong> {id} does not exist.
          </p>
        </div>
      )}
    </div>
  );
}

export default JobDetails;
