import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import close from "../assets/icons/menu-close.svg";

import "../sass/components/_search.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const SearchProducts = ({ isSearchOpen, handleSearch }) => {
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState([products]);

  async function getProducts() {
    await axios
      .get(`http://localhost:3000/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearched(products);
  }, [products]);

  const handleChange = (e) => {
    let search = e.target.value.trim().toLowerCase();
    setSearched(
      products.filter(
        (pr) =>
          pr.name.toLowerCase().includes(search) ||
          pr.title.toLowerCase().includes(search) ||
          pr.category.toLowerCase().includes(search) ||
          pr.price.toLowerCase().includes(search)
      )
    );
  };
  return (
    <div
      id="search"
      className={`${isSearchOpen ? "open-search" : "close-search"}`}
    >
      <div className="search-box">
        <button onClick={handleSearch} className="close-search-btn">
          <img src={close} alt="" />
        </button>
        <div className="top">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleChange}
          />
        </div>
        <div className="products-list">
          {searched.length !== 48 &&
            searched.map((pr, index) => (
              <div key={index} className="searched-card">
                <div className="pic">
                  <img src={pr.img} alt="" />
                </div>
                <div className="content">
                  <Link>{pr.name}</Link>
                  <p>{pr.title}</p>
                  <span>{pr.price}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
SearchProducts.propTypes = {
  isSearchOpen: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default SearchProducts;
