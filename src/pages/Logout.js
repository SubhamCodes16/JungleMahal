// src/components/LogoutButton.js

import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage or session
    localStorage.removeItem("user");

    // Optionally, if you're using context, also clear there
    // e.g., setUser(null);

    // Redirect to login page
    navigate("/", { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: "#d32f2f",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        marginLeft: "20px",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
