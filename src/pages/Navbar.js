import { NavLink } from "react-router-dom";
import LogoutButton from "./Logout";

function Navbar() {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 15px",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div>
      <nav style={{ backgroundColor: "#388e3c", padding: 10, textAlign: "center" }}>
        <NavLink to="/home" style={navStyle}>Home</NavLink>
        <NavLink to="/about" style={navStyle}>About Jungle Mahal</NavLink>
        <NavLink to="/thingstodo" style={navStyle}>Things to Do</NavLink>
        <NavLink to="/booking" style={navStyle}>Booking</NavLink>
        <NavLink to="/donation" style={navStyle}>Donation</NavLink>
        <NavLink to="/review" style={navStyle}>Review</NavLink>
        <NavLink to="/cart" style={navStyle}>Cart</NavLink>
        <LogoutButton/>
      </nav>
    </div>
  );
}

export default Navbar;
