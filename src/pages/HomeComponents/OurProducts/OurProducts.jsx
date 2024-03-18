import axios from "axios";
import "./our-products.scss";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
const OurProducts = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    await axios
      .get(`http://localhost:3000/products?_page=1&_per_page=8`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section id="our-products">
      <div className="container2 products__container">
        <div className="title">
          <h1>Our Products</h1>
        </div>
        <div className="list">
          {products.map((pr, index) => (
            <Card key={index} product={pr} />
          ))}
        </div>
        <Link to={"/shop"} className="show-more">Show More</Link>
      </div>
    </section>
  );
};

export default OurProducts;
