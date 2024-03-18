import "./range.scss";
import range1 from "../../../assets/home/range-1.png";
import range2 from "../../../assets/home/range-2.png";
import range3 from "../../../assets/home/range-3.png";
const Range = () => {
  return (
    <section id="range">
      <div className="container2 range__container">
        <div className="title">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="products">
          <div className="card">
            <div className="pic">
              <img src={range1} alt="" />
            </div>
            <h4>Dining</h4>
          </div>
          <div className="card">
            <div className="pic">
              <img src={range2} alt="" />
            </div>
            <h4>Living</h4>
          </div>
          <div className="card">
            <div className="pic">
              <img src={range3} alt="" />
            </div>
            <h4>Bedroom</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;
