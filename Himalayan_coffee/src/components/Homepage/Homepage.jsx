import React from "react";
import "./Homepage.css";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import HomepageImage from "../../assets/HomepageImage.jpg";
import banner1 from "../../assets/banner_files/Homepage_files/banner1.jpg";
import banner2 from "../../assets/banner_files/Homepage_files/banner2.png";
import banner3 from "../../assets/banner_files/Homepage_files/banner3.png";
import coffee1 from "../../assets/banner_files/Homepage_files/coffee1.png";
import coffee2 from "../../assets/banner_files/Homepage_files/coffee2.png";
import coffee3 from "../../assets/banner_files/Homepage_files/coffee3.png";
import coffee4 from "../../assets/banner_files/Homepage_files/coffee4.png";
import equipment_bg from "../../assets/banner_files/Homepage_files/equipment_bg.png";
import { IoLogoXbox } from "react-icons/io";
import barsita_training from "../../assets/banner_files/Homepage_files/barista_training.jpg";

import bakery_training from "../../assets/banner_files/Homepage_files/bakery_training.jpg";

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
            <div
              className="points"
              style={{
                fontSize: "40px",
                width: "30px",
                position: "absolute",
                display: "grid",
                right: "55vh", // Move to the right
                marginTop: "-29.5vh",
              }}
            >
              <HiMiniArrowSmallRight />
            </div>

            <img src={banner3} />

            <p>Why java coffee?</p>

            <p className="thirdpartp">
              Himalayan Java offers its customers the best-tasting coffee
              beverages in the country.
            </p>
            <div
              className="points"
              style={{
                fontSize: "40px",
                width: "30px",
                position: "absolute",
                display: "grid",
                right: "55vh",
                marginTop: "-92.5vh",
              }}
            >
              <HiMiniArrowSmallRight />
            </div>
            <p
              className="thirdparp-2"
              style={{ marginTop: "-17vh", marginRight: "19vh" }}
            >
              We have achieved this by using high-quality ingredients.
            </p>
          </div>
          <div className="packet">
            <div className="packets">
              <img src={coffee1} alt="" />
              <img src={coffee2} alt="" />
              <img src={coffee3} alt="" />
              <img src={coffee4} alt="" />

              <div className="coffee-name">
                <p>EVEREST ROAST</p>
                <p>THAMEL ROAST</p>
                <p>ESPRESSO ROAST</p>
                <p>MEDIUM ROAST</p>
              </div>
            </div>
          </div>
        </div>
        <div className="coffee-below">
          <div className="equipment">
            <img src={equipment_bg} />
          </div>
          <div className="equipment-right">
            <p
              style={{
                fontWeight: "100",
                fontSize: "20px",
                marginLeft: "-28vh",
                fontFamily: "sans-serif",
                marginTop: "35vh",
              }}
            >
              BECAUSE WE LOVE COFFEE
            </p>
            <h1
              className="header"
              style={{
                fontSize: "60px",
                width: "10px",
                fontWeight: "800",
                padding: "0px 10px",
                position: "relative",
                marginLeft: "75px",
                color: "grey",
              }}
            >
              Coffee Equipment
            </h1>
            <p>Your all-in-one coffee equipment destination.</p>
            <button
              className="learn-button"
              style={{
                marginLeft: "89px",
                postion: "relative",
                marginTop: "20px",
              }}
            >
              Learn More{" "}
            </button>
            <div className="barista-training">
              <p>TRAINING & WORKSHOP</p>
              <h1
                style={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  marginLeft: "-8vh",
                }}
              >
                Barista Training
              </h1>
              <p style={{ marginTop: "5vh" }}>
                Vocational training equips individuals with practical skills to
                empower themselves and contribute to their personal and
                professional advancement.
              </p>
              <button
                className="learn-button"
                style={{
                  marginLeft: "-7vh",
                  postion: "relative",
                  marginTop: "20px",
                  width: "200px",
                  height: "60px",
                }}
              >
                Learn More{" "}
              </button>
              <IoLogoXbox
                style={{
                  fontSize: "25px",
                  position: "relative",
                  marginLeft: "-45vh",
                  alignContent: "center",
                }}
              />
            </div>

            <p
              style={{
                fontWeight: "bold",
                color: "black",
                position: "relative",
                alignItems: "left",
                alignContent: "left",
                marginLeft: "-93vh",
                marginTop: "-6.5vh",
              }}
            >
              Barista School Brochure
            </p>
            <img
              src={barsita_training}
              style={{ width: "800px", height: "600px", marginTop: "-60vh" }}
            />
            <div className="training"></div>
          </div>
        </div>
        <img
          src={bakery_training}
          style={{
            height: "600px",
            width: "730px",
            marginTop: "5vh",
            alignContent: "left",
            justifyContent: "left",
            alignItems: "left",
            display: "block",
            marginLeft: "17vh",
          }}
        />
        <div className="training_workshop">
          <p>TRAINING & WORKSHOP</p>
          <h1>Bakery Training</h1>
          <p>
            We train students to help them understand the fundamentals of baking
            and running a bakery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
