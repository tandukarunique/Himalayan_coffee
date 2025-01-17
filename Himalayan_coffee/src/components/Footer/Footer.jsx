import React from "react";
import "./Footer.css";
import javafooterlogo from "../../assets/banner_files/Homepage_files/javafooterlogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import appstore from "../../assets/banner_files/Homepage_files/appstore.png";
import playstore from "../../assets/banner_files/Homepage_files/playstore.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <img src={javafooterlogo} />
        <div className="contact">
          <h2>Contact</h2>
          <h4>Head Office:</h4>
          <p>Tridevi Marg-26, Thamel, Kathmandu</p>
          <p>+9771 4512536</p>

          <h4>Administrative office:</h4>
          <p>Purve Dhoka, Nagpokhari Lane,</p>
          <p>Kathmandu</p>
          <p>+9771 591903</p>
          <p>info@himalayanjava.com</p>
          <div className="icon">
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
        <div className="training">
          <h2>Training & Workshop</h2>
          <p>Barista Training</p>
          <p>Bakery Training</p>
        </div>
        <div className="download">
          <h2>Download our app</h2>
          <img src={appstore} alt="" />
          <img src={playstore} alt="" />
        </div>
        <div className="terms d-flex">
          <div className="footer-text">
            <p>Terms & condition</p>
            <p>Privacy policy</p>
            <p>Contact</p>
          <p className="right">© Himalayan Java. 1999-2025 | Powered by: thamel.com</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
