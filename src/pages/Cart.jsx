import CartHero from "./CartComponents/CartHero/CartHero";
import Products from "./CartComponents/Products/Products";

const Cart = () => {
  return (
    <section id="cart">
      <CartHero />
      <Products />
    </section>
  );
};

export default Cart;
