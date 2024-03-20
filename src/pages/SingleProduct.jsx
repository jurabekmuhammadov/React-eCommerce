import { useParams } from "react-router-dom";

import "../sass/pages/_single-product.scss";
import Path from "./SingleProductsComp/Path/Path";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./SingleProductsComp/Product/Product";
import TabsSection from "./SingleProductsComp/Tabs/TabsSection";
import Related from "./SingleProductsComp/Related/Related";
const SingleProduct = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [productId]);

  async function getProduct() {
    await axios
      .get(`http://localhost:3000/products?id=${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <section id="single-product">
      <Path product={product} />
      <Product product={product} />
      <TabsSection product={product} />
      <Related product={product} />
    </section>
  );
};

export default SingleProduct;
