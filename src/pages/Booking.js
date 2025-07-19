import React, { useState, useEffect } from 'react';
import './Booking.css';
import Footer from '../inc/Footer';
import Navbar from './Navbar';

const roomPrices = {
  single: 2000,
  double: 3000,
  suite: 5000,
};

const mealPrices = {
  breakfast: 300,
  lunch: 500,
  dinner: 700,
};

const Booking = () => {
  const [roomType, setRoomType] = useState('single');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [meals, setMeals] = useState([]);
  const [nights, setNights] = useState(1);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const guests = adults + children;
    const roomCost = roomPrices[roomType] * nights;
    const mealCost = meals.reduce(
      (sum, meal) => sum + mealPrices[meal] * guests * nights,
      0
    );
    const transport = 2000;
    const gst = 0.18 * (roomCost + mealCost + transport);
    const totalAmount = roomCost + mealCost + transport + gst;
    setTotal(totalAmount.toFixed(2));
  }, [roomType, adults, children, meals, nights]);

  const handleMealChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMeals([...meals, value]);
    } else {
      setMeals(meals.filter((meal) => meal !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    const bookingData = {
      name,
      email,
      phone,
      roomType,
      adults,
      children,
      meals,
      nights,
      total,
      bookingTime: new Date().toISOString(),
    };

    try {
      const res = await fetch('http://localhost:2000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setAdults(1);
        setChildren(0);
        setMeals([]);
        setNights(1);
        setRoomType('single');
        setAgreed(false);
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div>
      {/* Navigation */}
     <Navbar/>

      <div className="container">
        <div className="header">
          <h1>🌿 Junglemahal Tourism</h1>
          <p>Book Your Stay & Complete Your Payment</p>
        </div>

        {submitted ? (
          <p style={{ textAlign: "center", color: "green", fontWeight: "bold", fontSize: "1.2rem" }}>
            ✅ Thank you for your booking!
          </p>
        ) : (
          <div className="payment-content">
            {/* Booking Form */}
            <div className="booking-summary">
              <h2 className="section-title">Booking Form</h2>
              <form>
                <div className="form-group">
                  <label>Room Type:</label>
                  <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                    <option value="single">Deluxe - ₹2000</option>
                    <option value="double">Super Deluxe - ₹3000</option>
                    <option value="suite">Suite - ₹5000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Number of Adults:</label>
                  <input type="number" value={adults} min="1" max="10" onChange={(e) => setAdults(parseInt(e.target.value))} />
                </div>

                <div className="form-group">
                  <label>Number of Children:</label>
                  <input type="number" value={children} min="0" max="10" onChange={(e) => setChildren(parseInt(e.target.value))} />
                </div>

                <div className="form-group">
                  <label>Number of Nights:</label>
                  <input type="number" value={nights} min="1" max="30" onChange={(e) => setNights(parseInt(e.target.value))} />
                </div>

                <div className="form-group">
                  <label>Meals Included (per person per day):</label>
                  <div className="meal-options">
                    {Object.keys(mealPrices).map((meal) => (
                      <label key={meal}>
                        <input type="checkbox" value={meal} onChange={handleMealChange} />
                        {meal.charAt(0).toUpperCase() + meal.slice(1)} (₹{mealPrices[meal]})
                      </label>
                    ))}
                  </div>
                </div>
              </form>

              {/* Booking Summary */}
              <div className="price-breakdown">
                <h3>Total</h3>
                <div className="price-item">
                  <span>Room ({roomType} × {nights} night{nights > 1 ? 's' : ''})</span>
                  <span>₹{roomPrices[roomType] * nights}</span>
                </div>
                <div className="price-item">
                  <span>Meals ({meals.join(', ') || 'None'})</span>
                  <span>
                    ₹{meals.reduce((sum, meal) =>
                      sum + mealPrices[meal] * (adults + children) * nights, 0)}
                  </span>
                </div>
                <div className="price-item"><span>Transportation</span><span>₹2000</span></div>
                <div className="price-item">
                  <span>GST (18%)</span>
                  <span>₹{(0.18 * (roomPrices[roomType] * nights +
                    meals.reduce((sum, meal) => sum + mealPrices[meal] * (adults + children) * nights, 0) + 2000)).toFixed(2)}</span>
                </div>
                <div className="price-item"><strong>Total</strong><strong>₹{total}</strong></div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="payment-form">
              <h2 className="section-title">Payment Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                  <label>I agree to the <a href="#">Terms and Conditions</a></label>
                </div>

                <button type="submit" className="pay-button">Pay ₹{total} Now</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const navStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px'
};

export default Booking;
