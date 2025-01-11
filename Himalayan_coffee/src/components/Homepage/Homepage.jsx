import React from "react";
import "./Homepage.css";
import HomepageImage from "../../assets/HomepageImage.jpg";
import banner1 from "../../assets/banner_files/Homepage_files/banner1.jpg";
import banner2 from "../../assets/banner_files/Homepage_files/banner2.png";
import banner3 from "../../assets/banner_files/Homepage_files/banner3.png";

const Homepage = () => {
  return (
    <div className="container">
      <div className="homepage">
        <img src={HomepageImage} alt="" />

        <p className="p-text">
          In 1999, we started off as the first specialty coffee shop in Nepal.
          Over the years, we have diversified from a small coffee shop to an
          enterprise franchising the Nepali Coffee brand, nationally and
          internationally.
        </p>
        <button className="learn-button">Learn More</button>
        <div className="banner">
          <img src={banner1} alt="banner1" />
          <div className="content">
            <p>Coffee Farming</p>
            <h1>The Journey from Crop to Cup</h1>
            <p>
              Grown in the ideal Himalayan air, our coffee beans are roasted to
              perfection and sent off to all our outlets to deliver the best
              coffee experience.
            </p>
            <button className="learn-button">Learn More </button>
          </div>
          <br />
          <br />
          <br />
          <div className="banner2">
            <div className="text-part">
              <h1 className="buy">Buy Online</h1>
              <p className="lighter">
                CURATED SELECTION OF COFFEE, DELIVERED TO YOUR DOORSTEP
              </p>
              <p>
                After we harvest coffee from our farm, our experts process them
                with the greatest care; subsequently, they are immediately
                packaged, preserving freshness, and sent off to all our outlets.
              </p>
            </div>
            <img src={banner2} />
          </div>
          <div className="right-part">
            <img  src={banner3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
