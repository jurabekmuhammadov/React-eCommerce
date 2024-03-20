import { Link } from "react-router-dom";

import arrowRight from "../../../assets/icons/arrow-right.svg";
const CartHero = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1>Cart</h1>
        <p>
          <Link to={"/"} className="home">
            Home
          </Link>
          <img src={arrowRight} alt="" />
          <Link className="shop">Cart</Link>
        </p>
      </div>
    </div>
  );
};

export default CartHero;
