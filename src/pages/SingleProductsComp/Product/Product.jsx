import PropTypes from "prop-types";

import changes1 from "../../../assets/single-product/changes-1.svg";
import changes2 from "../../../assets/single-product/changes-2.svg";
import changes3 from "../../../assets/single-product/changes-3.svg";
import star from "../../../assets/icons/star.svg";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import twitter from "../../../assets/icons/twitter.svg";
import "./product.scss";
import { useState } from "react";
const Product = ({ product }) => {
  const [img, setImg] = useState("");
  const rating = [];
  let ratingNumber = 0;

  product.map((pr) => {
    ratingNumber = pr.rating;
  });

  for (let i = 0; i <= ratingNumber; i++) {
    rating.push(i);
  }

  const handleImg = (img) => {
    setImg(img);
  };

  return (
    <section id="details">
      <div className="container2 details__container">
        <div className="left">
          <div className="changes">
            <button onClick={() => handleImg(changes1)} className="change-btn">
              <img src={changes1} alt="" />
            </button>
            <button onClick={() => handleImg(changes2)} className="change-btn">
              <img src={changes2} alt="" />
            </button>
            <button onClick={() => handleImg(changes3)} className="change-btn">
              <img src={changes3} alt="" />
            </button>
            <button
              onClick={() => handleImg(product.map((pr) => pr.img))}
              className="change-btn"
            >
              <img src={`../../../${product.map((pr) => pr.img)}`} alt="" />
            </button>
          </div>
          <div className="main-img">
            <img
              src={
                img
                  ? `../../../${img}`
                  : `../../../${product.map((pr) => pr.img)}`
              }
              alt="picture of product"
            />
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h1 className="name">{product.map((pr) => pr.name)}</h1>
            <span className="price">Rs. {product.map((pr) => pr.price)}</span>
            <div className="rating-reviews">
              <div className="rating">
                {rating.map((r, index) => (
                  <img key={index} src={star} alt="" />
                ))}
              </div>
              <div className="reviews">
                <span>{product.map((pr) => pr.review)} Customer Review</span>
              </div>
            </div>
            <p className="desc">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>
          <div className="actions">
            <div className="size">
              <span>Size</span>
              <div>
                <button className="l">L</button>
                <button className="xl">XL</button>
                <button className="xs">XS</button>
              </div>
            </div>
            <div className="color">
              <span>Color</span>
              <div>
                <button className="purple"></button>
                <button className="black"></button>
                <button className="brown"></button>
              </div>
            </div>
            <div className="add">
              <button>Add To Cart</button>
              <button>+ Compare</button>
            </div>
            <div className="extra-info">
              <ul>
                <li>SKU: SS001</li>
                <li>Category: {product.map((pr) => pr.category)}</li>
                <li>Tags: Sofa, Chair, Home, Shop</li>
                <li>
                  Share:{" "}
                  <div className="media">
                    <a href="https://www.facebook.com" target="_blank">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                      <img src={linkedin} alt="" />
                    </a>
                    <a href="https://www.x.com" target="_blank">
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Product.propTypes = {
  product: PropTypes.array,
};
export default Product;
