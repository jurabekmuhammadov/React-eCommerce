import { Link } from "react-router-dom";
import "./hero.scss";
import arrowRight from "../../../assets/icons/arrow-right.svg";

const Hero = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1>Shop</h1>
        <p>
          <Link to={"/"} className="home">
            Home
          </Link>
          <img src={arrowRight} alt="" />
          <Link className="shop">Shop</Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
