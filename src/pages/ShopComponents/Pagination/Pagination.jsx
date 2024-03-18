import "./pagination.scss";
import PropTypes from "prop-types";
const Pagination = ({
  multiplePages,
  page,
  handlePage,
  totalPages,
  setPage,
}) => {
  return (
    <div className="pagination">
      <button
        className="prev"
        disabled={!multiplePages || page === 1}
        onClick={() => handlePage("prev")}
      >
        Prev
      </button>
      <ul>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (p) => (
            <li
              className={`${page === p ? "active-page" : ""}`}
              key={p}
              onClick={() => setPage(p)}
            >
              {p}
            </li>
          )
        )}
      </ul>
      <button
        className="next"
        disabled={!multiplePages || page === totalPages}
        onClick={() => handlePage("next")}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  multiplePages: PropTypes.bool,
  page: PropTypes.number,
  handlePage: PropTypes.func,
  totalPages: PropTypes.number,
  setPage: PropTypes.func,
};

export default Pagination;
