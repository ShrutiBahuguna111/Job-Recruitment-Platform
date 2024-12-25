import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Shruti Bahuguna",
    email: "sb11@example.com",
    memberSince: "August 2023",
  });

  const [editData, setEditData] = useState({ ...profile });

  // Handle input changes during edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes and toggle view mode
  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
  };

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
          background: "linear-gradient(135deg, #e2d8fb 0%, #f4efff 100%)",
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
              {isEditing ? "Edit Profile" : "Your Profile"}
            </h2>
            {isEditing ? (
              <div className="mt-4 text-left">
                <div className="mb-3">
                  <label>
                    <strong>Name:</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                    className="form-control mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Email:</strong>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                    className="form-control mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Member Since:</strong>
                  </label>
                  <input
                    type="text"
                    name="memberSince"
                    value={editData.memberSince}
                    onChange={handleInputChange}
                    className="form-control mt-2"
                  />
                </div>
                <button
                  className="btn btn-success mt-3"
                  style={{
                    borderRadius: "10px",
                    padding: "10px 20px",
                  }}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <p className="mt-3 text-secondary">
                  Manage your account details and preferences.
                </p>
                <div className="mt-4 text-left">
                  <p>
                    <strong>Name:</strong> {profile.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {profile.email}
                  </p>
                  <p>
                    <strong>Member Since:</strong> {profile.memberSince}
                  </p>
                </div>
                <button
                  className="btn btn-primary mt-4"
                  style={{
                    borderRadius: "10px",
                    padding: "10px 20px",
                  }}
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
