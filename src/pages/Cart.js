// src/pages/Cart.js

import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
//import Navbar from "../inc/Navbar"; // Adjust path as needed
import Footer from "../inc/Footer";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [userId] = useState("64abcd1234567890efgh5678"); // TODO: Replace with real user ID from auth

  const saveCartToBackend = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          items: cartItems.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("✅ Cart saved:", data);
      } else {
        console.error("❌ Failed to save cart:", data);
      }
    } catch (err) {
      console.error("❌ Error connecting to backend:", err);
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      saveCartToBackend();
    }
  }, [cartItems]);

  return (
    <div style={{ backgroundColor: "#fefae0", minHeight: "100vh" }}>
      {/* <Navbar /> */}

      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: "#1b4332" }}>
          🛒 Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center">
            Your cart is empty.
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-success">
                  <tr>
                    <th>Product</th>
                    <th>Price (₹)</th>
                    <th>Qty</th>
                    <th>Subtotal (₹)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-end mt-4">
              <h4>Total: ₹{totalCost}</h4>

              {/* <div className="text-end mt-3">
                <NavLink to="/checkout" className="btn btn-success">
                  Proceed to Checkout
                </NavLink>
              </div> */}

              <button className="btn btn-warning mt-2" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
