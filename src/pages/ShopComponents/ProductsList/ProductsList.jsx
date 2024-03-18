import Card from "../../../components/Card";
import PropTypes from "prop-types";
import "./products-list.scss";
const ProductsList = ({ displayedProducts }) => {
  return (
    <div className="products__container container2">
      {displayedProducts.map((pr, index) => (
        <Card key={index} product={pr} />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  displayedProducts: PropTypes.array,
};

export default ProductsList;
