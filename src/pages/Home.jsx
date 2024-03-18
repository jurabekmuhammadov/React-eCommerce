import { Fragment } from "react";
import Hero from "./HomeComponents/Hero/Hero";
import Range from "./HomeComponents/Range/Range";
import OurProducts from "./HomeComponents/OurProducts/OurProducts";
import FuniroFurniture from "./HomeComponents/FuniroFurniture.jsx/FuniroFurniture";
// import Carousel from "./HomeComponents/Carousel/Carousel";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Range />
      <OurProducts />
      {/* <Carousel /> */}
      <FuniroFurniture />
    </Fragment>
  );
};

export default Home;
