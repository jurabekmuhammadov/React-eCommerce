import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container2 top__container">
        <div className="left">
          <h4>Funiro.</h4>
          <p>
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </p>
        </div>
        <div className="right">
          <ul className="links">
            <h5>Links</h5>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
          <ul className="help">
            <h5>Help</h5>
            <li>
              <Link>Payment Options</Link>
            </li>
            <li>
              <Link>Returns</Link>
            </li>
            <li>
              <Link>Privacy Policies</Link>
            </li>
          </ul>
          <ul className="form">
            <h5>Newsletter</h5>
            <form>
              <input type="text" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </ul>
        </div>
      </div>
      <div className="container2 bottom__container">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
