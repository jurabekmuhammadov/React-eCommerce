import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import share from "../assets/icons/share.svg";
import showMore from "../assets/icons/show-more.svg";
import like from "../assets/icons/like-smal.svg";

const Card = ({ product, imgUrl }) => {
  const addToCart = (id) => {
    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    let positionThisProductInCart = carts.findIndex(
      (value) => value.productId === id
    );
    if (carts <= 0) {
      carts = [{ productId: id, quantity: 1 }];
    } else if (positionThisProductInCart < 0) {
      carts.push({ productId: id, quantity: 1 });
    } else {
      carts[positionThisProductInCart].quantity++;
    }

    localStorage.setItem("carts", JSON.stringify(carts));
    window.location.reload(true);
  };
  return (
    <div className="card">
      <div className="pic">
        <img src={imgUrl ? `../../../${product.img}` : product.img} alt="" />
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
        <button onClick={() => addToCart(product.id)}>Add to cart</button>
        <div className="action">
          <Link>
            <img src={share} alt="" />
            Share
          </Link>
          <Link to={`/single-product/${product.id}`}>
            <img src={showMore} alt="" />
            More
          </Link>
          <Link>
            <img src={like} alt="" />
            Like
          </Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  product: PropTypes.object,
  imgUrl: PropTypes.string,
};

export default Card;
