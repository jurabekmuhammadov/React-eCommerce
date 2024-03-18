import { Link } from "react-router-dom";
import "./hero.scss";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container1 hero__container">
        <div className="box">
          <span>New Arrival</span>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link to={"/shop"}>Buy Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
