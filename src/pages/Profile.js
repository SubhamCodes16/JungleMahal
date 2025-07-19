// src/pages/Profile.js

import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "#388e3c" }}>Your Profile</h2>
      {user ? (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            display: "inline-block",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Profile;
