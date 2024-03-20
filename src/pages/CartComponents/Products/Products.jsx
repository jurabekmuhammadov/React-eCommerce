import "./products.scss";
import { Link } from "react-router-dom";
import deletebtn from "../../../assets/icons/delete.svg";
import { useState } from "react";
const Products = () => {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  const handleAdd = (id) => {
    const updatedCarts = carts.map((product) =>
      product.productId === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCarts(updatedCarts);
    localStorage.setItem("carts", JSON.stringify(updatedCarts));
  };
  const handleMinus = (id) => {
    const updatedCarts = carts.map((product) =>
      product.productId === id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCarts(updatedCarts);
    localStorage.setItem("carts", JSON.stringify(updatedCarts));
  };

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
              {carts.map((pr, index) => (
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
                      <button onClick={() => handleAdd(pr.productId)}>+</button>
                      <span>{pr.quantity}</span>
                      <button onClick={() => handleMinus(pr.productId)}>
                        -
                      </button>
                    </div>
                  </th>
                  <th className="total">
                    <div className="totall">
                      <span>Rs. {pr.price} </span>
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
