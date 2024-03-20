import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SearchProducts from "./components/SearchProducts";
import { useState } from "react";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    document.body.style.overflow = "hidden";
  };
  return (
    <BrowserRouter>
      <SearchProducts isSearchOpen={isSearchOpen} handleSearch={handleSearch} />
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
