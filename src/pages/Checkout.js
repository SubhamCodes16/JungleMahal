import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = "64b7f263ab2345c0eab12345"; // Replace with real userId from auth when ready

    const orderData = {
      userId,
      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount,
    };

    try {
      const res = await fetch("http://localhost:2000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        // alert(✅ Thank you ${formData.name}! Your order for ₹${totalAmount} has been placed.);
        clearCart();
        navigate("/thankyou");
      } else {
        console.error("❌ Order failed:", data);
        alert("❌ Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("❌ Error placing order:", err);
      alert("❌ Could not connect to backend.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow mx-auto" style={{ maxWidth: 500 }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-control mb-3"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="form-control mb-3"
          required
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          className="form-control mb-3"
          rows={3}
          required
          onChange={handleChange}
        />
        <h5>Total Amount: ₹{totalAmount}</h5>
        <button type="submit" className="btn btn-success w-100 mt-3">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;