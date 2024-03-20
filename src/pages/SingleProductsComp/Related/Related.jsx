import PropTypes from "prop-types";
import "./related.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const Related = ({ product }) => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    await axios
      .get(
        `http://localhost:3000/products?category=${product.map(
          (pr) => pr.category
        )}`
      )
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
  return (
    <section id="related">
      <div className="container2 related__container">
        <h1>Related Products</h1>
        <div className="related__products">
          {products.slice(0, 4).map((pr, index) => (
            <Card key={index} product={pr} />
          ))}
        </div>
        <Link to={"/shop"} className="show-more">
          Show More
        </Link>
      </div>
    </section>
  );
};

Related.propTypes = {
  product: PropTypes.array,
};

export default Related;
