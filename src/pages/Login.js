import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const signinRef = useRef();
  const signupRef = useRef();
  const forgotRef = useRef();
  const loadingRef = useRef();

  const [activeForm, setActiveForm] = useState("signin");
  const [messages, setMessages] = useState({
    signin: { error: "", success: "" },
    signup: { error: "", success: "" },
    forgot: { error: "", success: "" },
  });

  const API_BASE_URL = "http://localhost:2000/api";

  const showForm = (formType) => {
    setActiveForm(formType);
    setMessages({ signin: {}, signup: {}, forgot: {} });
  };

  const apiCall = async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "An error occurred");
    return result;
  };
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setMessages((prev) => ({ ...prev, signin: {} }));
    loadingRef.current.style.display = "block";

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await apiCall("/auth/signin", { email, password });
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);
      setMessages((prev) => ({
        ...prev,
        signin: { success: "Login successful! Redirecting..." },
      }));
      setTimeout(() => {
        navigate("/home")
      }, 3000);
    } catch (error) {
      setMessages((prev) => ({
        ...prev,
        signin: { error: error.message },
      }));
    } finally {
      loadingRef.current.style.display = "none";
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessages((prev) => ({ ...prev, signup: {} }));

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (password !== confirm) {
      return setMessages((prev) => ({
        ...prev,
        signup: { error: "Passwords do not match" },
      }));
    }
    if (password.length < 6) {
      return setMessages((prev) => ({
        ...prev,
        signup: { error: "Password must be at least 6 characters" },
      }));
    }

    loadingRef.current.style.display = "block";
    try {
      await apiCall("/auth/signup", { name, email, password });
      setMessages((prev) => ({
        ...prev,
        signup: { success: "Account created! Please sign in." },
      }));
      e.target.reset();
      setTimeout(() => showForm("signin"), 2000);
    } catch (error) {
      setMessages((prev) => ({
        ...prev,
        signup: { error: error.message },
      }));
    } finally {
      loadingRef.current.style.display = "none";
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setMessages((prev) => ({ ...prev, forgot: {} }));
    loadingRef.current.style.display = "block";
    const email = e.target.email.value;

    try {
      await apiCall("/auth/forgot-password", { email });
      setMessages((prev) => ({
        ...prev,
        forgot: { success: "Reset link sent to your email!" },
      }));
      e.target.reset();
    } catch (error) {
      setMessages((prev) => ({
        ...prev,
        forgot: { error: error.message },
      }));
    } finally {
      loadingRef.current.style.display = "none";
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const user = localStorage.getItem("user");
  //   if (token && user) window.location.href = "/dashboard";
  // }, []);

  return (
    <div className="container">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #e0e5ec 0%, #d1d9e6 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          background: #e0e5ec;
          padding: 3rem 2.5rem;
          border-radius: 30px;
          box-shadow: 20px 20px 60px #b8bcc8, -20px -20px 60px #ffffff;
          width: 100%;
          max-width: 420px;
          position: relative;
        }
        .logo {
          text-align: center;
          margin-bottom: 2rem;
        }
        .logo h1 {
          color: #4a5568;
          font-size: 1.8rem;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        .form-container {
          position: relative;
        }
        .form-group {
          margin-bottom: 2rem;
        }
        .form-group input {
          width: 100%;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 20px;
          font-size: 1rem;
          color: #4a5568;
          background: #e0e5ec;
          box-shadow: inset 10px 10px 20px #b8bcc8, inset -10px -10px 20px #ffffff;
          transition: all 0.3s ease;
        }
        .form-group input::placeholder {
          color: #a0a0a0;
        }
        .form-group input:focus {
          outline: none;
          box-shadow: inset 5px 5px 15px #b8bcc8, inset -5px -5px 15px #ffffff;
        }
        .btn {
          width: 100%;
          padding: 1rem 1.5rem;
          background: #e0e5ec;
          color: #4a5568;
          border: none;
          border-radius: 20px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1.5rem;
          box-shadow: 10px 10px 20px #b8bcc8, -10px -10px 20px #ffffff;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 15px 15px 30px #b8bcc8, -15px -15px 30px #ffffff;
        }
        .btn:active {
          transform: translateY(0);
          box-shadow: inset 5px 5px 15px #b8bcc8, inset -5px -5px 15px #ffffff;
        }
        .link-btn {
          background: none;
          color: #667eea;
          text-decoration: none;
          font-size: 0.95rem;
          cursor: pointer;
          border: none;
          display: block;
          text-align: center;
          margin: 1rem 0;
          transition: all 0.3s ease;
        }
        .link-btn:hover {
          color: #764ba2;
          background: #e0e5ec;
          box-shadow: 5px 5px 15px #b8bcc8, -5px -5px 15px #ffffff;
        }
        .form-section { display: none; }
        .form-section.active { display: block; }
        .error-message {
          color: #e74c3c;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          background: #fdf2f2;
          border-radius: 10px;
          border-left: 4px solid #e74c3c;
          padding: 0.5rem;
        }
        .success-message {
          color: #27ae60;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          background: #f0f9f0;
          border-radius: 10px;
          border-left: 4px solid #27ae60;
          padding: 0.5rem;
        }
        .divider {
          text-align: center;
          margin: 2rem 0;
          position: relative;
        }
        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8bcc8, transparent);
        }
        .divider span {
          background: #e0e5ec;
          padding: 0 1.5rem;
          color: #a0a0a0;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .loading {
          display: none;
          text-align: center;
          padding: 2rem;
        }
        .spinner {
          border: 4px solid #e0e5ec;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
          box-shadow: 5px 5px 15px #b8bcc8, -5px -5px 15px #ffffff;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .form-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .form-header h2 {
          color: #4a5568;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .form-header p {
          color: #718096;
          font-size: 1rem;
        }
        @media (max-width: 480px) {
          .container {
            padding: 2rem 1.5rem;
            margin: 1rem;
          }
          .form-group input {
            padding: 0.8rem 1.2rem;
          }
          .btn {
            padding: 0.8rem 1.2rem;
          }
        }
      `}</style>

      <div className="logo">
        <h1>Jungle Mahal Tourism Development</h1>
      </div>

      {/* Sign In Form */}
      <div className={`form-section ${activeForm === "signin" ? "active" : ""}`} ref={signinRef}>
        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        <form onSubmit={handleSignin}>
          <div className="form-group">
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input name="password" type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Sign In</button>
          {messages.signin.error && <div className="error-message">{messages.signin.error}</div>}
          {messages.signin.success && <div className="success-message">{messages.signin.success}</div>}
        </form>
        <div className="divider"><span>or</span></div>
        <button className="link-btn" onClick={() => showForm("forgot")}>Forgot Password?</button>
        <button className="link-btn" onClick={() => showForm("signup")}>Don't have an account? Sign Up</button>
      </div>

      {/* Sign Up Form */}
      <div className={`form-section ${activeForm === "signup" ? "active" : ""}`} ref={signupRef}>
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Join us today</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input name="name" type="text" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input name="password" type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input name="confirm" type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          {messages.signup.error && <div className="error-message">{messages.signup.error}</div>}
          {messages.signup.success && <div className="success-message">{messages.signup.success}</div>}
        </form>
        <div className="divider"><span>or</span></div>
        <button className="link-btn" onClick={() => showForm("signin")}>Already have an account? Sign In</button>
      </div>

      {/* Forgot Password */}
      <div className={`form-section ${activeForm === "forgot" ? "active" : ""}`} ref={forgotRef}>
        <div className="form-header">
          <h2>Reset Password</h2>
          <p>Enter your email to reset your password</p>
        </div>
        <form onSubmit={handleForgot}>
          <div className="form-group">
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <button type="submit" className="btn">Send Reset Link</button>
          {messages.forgot.error && <div className="error-message">{messages.forgot.error}</div>}
          {messages.forgot.success && <div className="success-message">{messages.forgot.success}</div>}
        </form>
        <div className="divider"><span>or</span></div>
        <button className="link-btn" onClick={() => showForm("signin")}>Back to Sign In</button>
      </div>

      {/* Loading Spinner */}
      <div className="loading" ref={loadingRef}>
        <div className="spinner" />
        <p>Processing...</p>
      </div>
    </div>
  );
};

export default Login;
