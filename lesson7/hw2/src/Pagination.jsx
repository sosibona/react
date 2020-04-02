import React from "react";

const Pagination = props => {
  const isPrevPageAvailable = props.currentPage <= 1;
  const isNextPageAvailable =
    Math.ceil(props.totalItems / (props.currentPage * props.itemsPerPage)) ===
    1;

  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={props.goPrev}
        disabled={isPrevPageAvailable}
      >
        {isPrevPageAvailable || "←"}
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button
        className="btn"
        onClick={props.goNext}
        disabled={isNextPageAvailable}
      >
        {isNextPageAvailable || "→"}
      </button>
    </div>
  );
};

export default Pagination;
