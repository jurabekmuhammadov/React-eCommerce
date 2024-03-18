import "./features.scss";
import trophy from "../../../assets/shop/trophy.svg";
import warranty from "../../../assets/shop/warranty.svg";
import shipping from "../../../assets/shop/shipping.svg";
import support from "../../../assets/shop/support.svg";
const Features = () => {
  return (
    <div className="features">
      <div className="container1 features__container">
        <div className="features-card">
          <div className="logo">
            <img src={trophy} alt="" />
          </div>
          <div className="content">
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="features-card">
          <div className="logo">
            <img src={warranty} alt="" />
          </div>
          <div className="content">
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="features-card">
          <div className="logo">
            <img src={shipping} alt="" />
          </div>
          <div className="content">
            <h4>Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="features-card">
          <div className="logo">
            <img src={support} alt="" />
          </div>
          <div className="content">
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
