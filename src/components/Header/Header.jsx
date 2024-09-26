import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link style={{ textDecoration: "none" }} to="/">
            <h1>
              Bhoj<span className="bari">Bari</span>
              <br />
              <span className="best">Best restaurent</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="navmenu">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/menu"
            >
              <li>Menu</li>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/chefs"
            >
              <li>Chefs</li>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/about"
            >
              <li>About us</li>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/gallery"
            >
              <li>Gallery</li>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/book"
            >
              <li>Book A Table</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
