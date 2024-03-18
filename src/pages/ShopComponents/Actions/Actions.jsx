import "./actions.scss";
import PropTypes from "prop-types";
const Actions = ({ filter }) => {
  return (
    <div className="actions-section">
      <div className="container2 actions__container">
        <div className="left">
          <div className="filter">
            <span>Filter</span>
            <select name="filter" id="filter" onChange={filter}>
              <option value="all" defaultValue>
                All
              </option>
              <option value="sofas">Sofas</option>
              <option value="chairs">Chairs</option>
              <option value="tables">Tables</option>
              <option value="accessory">Accessory</option>
            </select>
          </div>
          <div className="line"></div>
          <div className="showing-results">
            <p>Showing 1–16 of 48 results</p>
          </div>
        </div>
        <div className="right">
          <div className="show">
            <span>Show</span>
            <input type="text" defaultValue={16} />
          </div>
          <div className="sort">
            <span>Sort by</span>
            <select name="sort" id="sort">
              <option value="default" defaultValue>
                Default
              </option>
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

Actions.propTypes = {
  filter: PropTypes.func,
};

export default Actions;
