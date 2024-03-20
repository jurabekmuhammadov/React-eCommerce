import CartHero from "./CartComponents/CartHero/CartHero";
import Features from "./CartComponents/Features/Features";
import Products from "./CartComponents/Products/Products";

const Cart = () => {
  return (
    <section id="cart">
      <CartHero />
      <Products />
      <Features />
    </section>
  );
};

export default Cart;
