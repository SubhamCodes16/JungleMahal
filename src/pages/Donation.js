import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../inc/Footer";
import Navbar from "./Navbar";

const Donation = () => {
  const [amount, setAmount] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false); // ✅

  const quickAmounts = [50, 100, 250, 500, 1000, 2500];

  const handleQuickAmountClick = (amt) => setAmount(amt);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(Math.max(0, Number(value)));
    else setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amount < 50) {
      alert("❌ Minimum donation amount is ₹50");
      return;
    }

    try {
      const res = await fetch("http://localhost:2000/api/donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentId: "manual_donation",
          amount,
          donor: form,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true); // ✅ Show thank-you message
        setAmount(0);
        setForm({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        alert("⚠️ Error saving donation.");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Could not connect to backend.");
    }
  };

  return (
    <div className="donation-container">
      <style>{`
        .donation-container {
          font-family: 'Segoe UI', sans-serif;
          background: #bbe8bb;
          color: #2e3d49;
          padding: 20px;
        }
        .donation-header {
          background-color: #fffffffa;
          color: black;
          padding: 30px;
          text-align: center;
          border-radius: 8px;
        }
        .impact-cards {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          flex-wrap: wrap;
        }
        .impact-card {
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          width: 30%;
          min-width: 200px;
          text-align: center;
          margin: 10px;
        }
        .donation-form {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          margin-top: 20px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .amount-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 10px 0;
        }
        .amount-btn {
          padding: 10px 15px;
          border: none;
          background-color: #4caf50;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }
        .form-row {
          display: flex;
          gap: 10px;
        }
        .donate-btn {
          margin-top: 20px;
          padding: 12px 25px;
          background-color: #388e3c;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }
      `}</style>

      <Navbar/>

      <header className="donation-header">
        <h1>Support Junglemahal Tourism</h1>
        <p>Help us preserve and promote the natural beauty and cultural heritage of Junglemahal</p>
      </header>

      <main>
        <div className="impact-cards">
          <div className="impact-card">
            <h3>Conservation</h3>
            <p>Protect nature and wildlife</p>
          </div>
          <div className="impact-card">
            <h3>Community</h3>
            <p>Support local livelihoods</p>
          </div>
          <div className="impact-card">
            <h3>Heritage</h3>
            <p>Preserve cultural beauty</p>
          </div>
        </div>

        <section className="donation-form">
          <h2>Make a Donation</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Donation Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleInputChange}
                placeholder="Enter amount (min. ₹50)"
                min={50}
                required
              />
            </div>

            <div className="amount-buttons">
              {quickAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  className="amount-btn"
                  onClick={() => handleQuickAmountClick(amt)}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <h3>Your Information</h3>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={form.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={form.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleInputChange}
            />

            <button type="submit" className="donate-btn">
              <i className="fas fa-heart" /> Donate ₹{amount || 0} Now
            </button>
          </form>

          {submitted && (
            <p style={{ marginTop: 20, color: "green", textAlign: "center" }}>
              ✅ Thank you for your generous donation!
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

const navStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px'
};

export default Donation;
