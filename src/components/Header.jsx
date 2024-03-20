import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

import logo from "../assets/icons/logo.svg";
import accountIcon from "../assets/icons/account.svg";
import searchIcon from "../assets/icons/search.svg";
import likeIcon from "../assets/icons/like.svg";
import cartIcon from "../assets/icons/cart.svg";
import openMenuIcon from "../assets/icons/menu-open.svg";
import closeMenuIcon from "../assets/icons/menu-close.svg";
const Header = ({ handleSearch }) => {
  const [isNavOpen, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!isNavOpen);
  };

  return (
    <header>
      <div className="container1 header__container">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
            <span>Furniro</span>
          </Link>
        </div>
        <nav
          id="navbar"
          className={`${isNavOpen ? "navbar-open" : "navbar-close"}`}
        >
          <button className="close-btn" onClick={handleNavbar}>
            <img src={closeMenuIcon} alt="" />
          </button>
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </nav>
        <div className="actions">
          <Link className="account">
            <img src={accountIcon} alt="" />
          </Link>
          <button className="search-btn" onClick={handleSearch}>
            <img src={searchIcon} alt="" />
          </button>
          <Link className="like">
            <img src={likeIcon} alt="" />
          </Link>
          <Link className="cart" to={"/cart"}>
            <img src={cartIcon} alt="" />
          </Link>
          <button className="open-btn" onClick={handleNavbar}>
            <img src={openMenuIcon} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;
