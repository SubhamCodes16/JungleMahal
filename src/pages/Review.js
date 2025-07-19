import React, { useState } from "react";
import Footer from "../inc/Footer";
import Navbar from "./Navbar";
function Review() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
  const handleSubmit = async (e) => {
  e.preventDefault();
  // Email validation
  if (!isValidEmail(formData.email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }
  try {
    const response = await fetch("http://localhost:2000/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", rating: "", comments: "" });
    } else {
      alert(result.error || "Failed to submit review.");
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Try again.");
  }
};


  return (
    <div>
      {/* Navigation Bar */}
              <Navbar/>
    <div style={{ padding: 30, maxWidth: 600, margin: "auto", backgroundColor: "#ffffffff", borderRadius: 10, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#2e7d32", textAlign: "center" }}>🌟 Share Your Experience</h2>
      <p style={{ textAlign: "center" }}>We value your feedback to help us grow and improve Jungle Mahal Tourism!</p>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Email ID:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Rating:</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Rating</option>
          <option value="5">★★★★★ - Excellent</option>
          <option value="4">★★★★☆ - Very Good</option>
          <option value="3">★★★☆☆ - Good</option>
          <option value="2">★★☆☆☆ - Fair</option>
          <option value="1">★☆☆☆☆ - Poor</option>
        </select>

        <label style={labelStyle}>Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: "100px" }}
        />

        <button type="submit" style={submitButtonStyle}>
          Submit Review
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: 20, color: "green", textAlign: "center" }}>
          ✅ Thank you for your feedback!
        </p>
      )}
    </div>
    <Footer />
    </div>
    
  );
}

// Styling objects
const labelStyle = {
  display: "block",
  marginTop: 15,
  marginBottom: 5,
  fontWeight: "bold"
};

const inputStyle = {
  width: "100%",
  padding: 10,
  borderRadius: 5,
  border: "1px solid #ccc"
};

const submitButtonStyle = {
  marginTop: 20,
  width: "100%",
  padding: 12,
  backgroundColor: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontWeight: "bold"
};

export default Review;
