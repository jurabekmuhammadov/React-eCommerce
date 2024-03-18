import { useEffect, useState } from "react";
import axios from "axios";


import "../sass/pages/_shop.scss";
import "../sass/components/_card.scss";
import Hero from "./ShopComponents/Hero/Hero";
import Actions from "./ShopComponents/Actions/Actions";
import ProductsList from "./ShopComponents/ProductsList/ProductsList";
import Pagination from "./ShopComponents/Pagination/Pagination";
import Features from "./ShopComponents/Features/Features";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const totalPages = Math.ceil(filteredProducts.length / 16);

  const multiplePages = totalPages > 1;

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

  const handlePage = (type) => {
    if (type === "prev" && page > 1) {
      setPage(page - 1);
    } else if (type === "next" && page < totalPages) {
      setPage(page + 1);
    }
  };

  const filter = (e) => {
    setPage(1);
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered =
      filterValue !== "all"
        ? products.filter((product) => product.category === filterValue)
        : products;
    setFilteredProducts(filtered);
  }, [products, filterValue]);

  const startIndex = (page - 1) * 16;
  const endIndex = startIndex + 16;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);
  return (
    <section id="shop">
      <Hero />
      <Actions filter={filter} />
      <ProductsList displayedProducts={displayedProducts} />
      <Pagination
        multiplePages={multiplePages}
        page={page}
        handlePage={handlePage}
        totalPages={totalPages}
        setPage={setPage}
      />
      <Features />

    </section>
  );
};

export default Shop;
