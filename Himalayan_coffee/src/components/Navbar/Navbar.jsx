import React from "react";
import "./Navbar.css";
import logo from "../../assets/banner_files/Homepage_files/logo-new.png";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} className="logo" alt="logo" />{" "}
        <div className="navbar-options">
          <ul className="nav-list">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Locations</li>
            <li>Franchise</li>
            <li>Loyality App</li>
            <div className="search_icon">
              <CiSearch />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
