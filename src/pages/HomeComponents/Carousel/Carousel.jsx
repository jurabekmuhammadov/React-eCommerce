import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./carousel.scss";

import carousel1 from "../../../assets/home/carousel-1.png";
import carousel2 from "../../../assets/home/carousel-2.png";
import carousel3 from "../../../assets/home/carousel-3.png";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="carousel-section">
      <div className="container2 carousel__container">
        <div className="left">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link to={"/shop"}>Explore More</Link>
        </div>
        <div className="right">
          <Slider {...settings}>
            <div>
              <img src={carousel1} alt="" />
            </div>
            <div>
              <img src={carousel2} alt="" />
            </div>
            <div>
              <img src={carousel3} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
