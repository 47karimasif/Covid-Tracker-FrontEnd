import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";
import covid from "../Images/covid.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light ">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={covid} alt="logo" height="40" width="40" />
          <span className="title">C</span>o<span className="title">vi</span>d{" "}
          <span className="title">T</span>r<span className="title">ac</span>ker
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <span className="link-name py-1">Home</span>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/india" className="nav-link">
                <span className="link-name py-1">Indian-Stats</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/world" className="nav-link">
                <span className="link-name py-1">Global-Stats</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/team" className="nav-link">
                <span className="link-name py-1">Developers</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
