import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import "./Slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides visible
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Enables centering the middle slide
    centerPadding: "30vh", // Remove padding around the center slide
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "EnznB",
      source: "Trip Advisor",
      rating: 5,
      text: "Lovely place to hangout with friends and family. They serve tasty food. The coffee is also great here. A must-visit place if you are in Nepal.",
    },
    {
      name: "Amyholland212",
      source: "Trip Advisor",
      rating: 5,
      text: "Best coffee in Nepal! Definitely worth a visit if you are craving a real fresh bean coffee. The barista training is spot-on with high standards.",
    },
    {
      name: "John_doe",
      source: "Google Reviews",
      rating: 4,
      text: "A fantastic place with a cozy ambiance. Coffee is top-notch and desserts are a must-try! Service can be improved slightly.",
    },
  ];

  return (
    <div className="testimonial-slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div
              className="testimonial-header"
              style={{
                alignItems: "left",
                position: "relative",
                marginLeft: "-22vh",
              }}
            >
              <h3>{testimonial.name}</h3>
              <p>{testimonial.source}</p>
            </div>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <AiFillStar key={i} className="star-icon" />
              ))}
            </div>
            <p
              className="testimonial-text"
              style={{ fontSize: "25px", padding: "30px 30px" }}
            >
              {testimonial.text}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
