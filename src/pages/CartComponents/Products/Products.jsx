import axios from "axios";
import { useEffect, useState } from "react";
import "./products.scss";
import { Link } from "react-router-dom";
import deletebtn from "../../../assets/icons/delete.svg";
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
            <tbody>
              {data.map((pr, index) => (
                <tr key={index}>
                  <th className="pic">
                    <div className="picc">
                      <img src={pr.img} alt="" />
                      <span>{pr.name}</span>
                    </div>
                  </th>
                  <th className="price">
                    <div className="pricee">
                      <span>{pr.price}</span>
                    </div>
                  </th>
                  <th className="actions">
                    <div className="actionss">
                      <button>+</button>
                      <span>{pr.quantity}1</span>
                      <button>-</button>
                    </div>
                  </th>
                  <th className="total">
                    <div className="totall">
                      <span>Rs. {pr.price}</span>
                      <button>
                        <img src={deletebtn} alt="" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
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
            <Link className="checkout">Check Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
