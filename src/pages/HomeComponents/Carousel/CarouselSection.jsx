import { Link } from "react-router-dom";
import "./carousel.scss";
import { Carousel } from "react-responsive-carousel";
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const CarouselSection = () => {
  return (
    <section id="carousel-section">
      <div className="carousel__container container2">
        <div className="left">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link to={"/shop"}>Explore More</Link>
        </div>
        <div className="right">
          <Carousel>
            <div>
              <img src="assets/1.jpeg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="assets/2.jpeg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="assets/3.jpeg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
