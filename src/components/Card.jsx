import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import share from "../assets/icons/share.svg";
import compare from "../assets/icons/compare.svg";
import like from "../assets/icons/like-smal.svg";
const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="pic">
        <img src={product.img} alt="" />
      </div>
      <div className="content">
        <h3>{product.name}</h3>
        <p>{product.title}</p>
        <div className="prices">
          <span className="new-price">{product.price}</span>
          <span className="old-price">3.500.000</span>
        </div>
      </div>
      {product.discount !== 0 ? (
        <div className="discount">
          <span>{`-${product.discount}%`}</span>
        </div>
      ) : (
        ""
      )}
      {product.isNew ? (
        <div className="new">
          <span>New</span>
        </div>
      ) : (
        ""
      )}
      <div className="overlay">
        <button>Add to cart</button>
        <div className="action">
          <Link><img src={share} alt="" />Share</Link>
          <Link><img src={compare} alt="" />Compare</Link>
          <Link><img src={like} alt="" />Like</Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
