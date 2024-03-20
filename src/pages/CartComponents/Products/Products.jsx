import axios from "axios";
import { useEffect, useState } from "react";
import "./products.scss";
import { Link } from "react-router-dom";
const Products = () => {
  let cartsFromLocalStorage = JSON.parse(localStorage.getItem("carts")) || [];

  const [products, setProducts] = useState([]);

  const filteredData = cartsFromLocalStorage.filter((item) =>
    products.some((databaseItem) => databaseItem.id === item.productId)
  );
  let database = [];
  const data = filteredData.map((item) => {
    database = products.find((data) => data.id === item.productId);
    return database;
  });

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

  return (
    <div id="cart-list">
      <div className="container2 cart-list-container">
        <div className="left">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            
          </table>
          {data.map((pr, index) => (
            <div className="item-card" key={index}>
              <div className="pic">
                <img src={pr.img} alt="" />
              </div>
              <div className="name">
                <span>{pr.name}</span>
              </div>
              <div className="price">
                <span>{pr.price}</span>
              </div>
              <div className="actions">
                <button>+</button>
                <span>{pr.quantity}1</span>
                <button>-</button>
              </div>
              <div className="total">
                <span>Rs.{pr.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          <div className="box">
            <h3>Cart Totals</h3>
            <div className="subtotal">
              <h5>Subtotal</h5>
              <span>Rs. 500.000</span>
            </div>
            <div className="total">
              <h5>Total</h5>
              <span>Rs. 500.00</span>
            </div>
            <Link>Check Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
