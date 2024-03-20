import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./path.scss";

import arrowRight from "../../../assets/icons/arrow-right.svg";
const Path = ({ product }) => {
  return (
    <div id="path">
      <div className="container2 path__container">
        <div className="path">
          <Link to={"/"}>
            Home <img src={arrowRight} alt="" />
          </Link>
          <Link to={"/shop"}>
            Shop <img src={arrowRight} alt="" />
          </Link>
          <div className="line"></div>
          <p className="product-name">{product.map((pr) => pr.name)}</p>
        </div>
      </div>
    </div>
  );
};

Path.propTypes = {
  product: PropTypes.array,
};

export default Path;
