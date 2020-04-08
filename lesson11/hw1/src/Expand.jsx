import React from "react";

const Expand = ({ title, children, toggleContent, isOpen }) => {
  const upChevron = <i className="fas fa-chevron-up"></i>;
  const downChevron = <i className="fas fa-chevron-down"></i>;
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleContent}>
          <span className={isOpen ? "hidden" : ""}>{downChevron}</span>
          <span className={isOpen ? "" : "hidden"}>{upChevron}</span>
          {/* {isOpen ? <span>{upChevron}</span> : <span>{downChevron}</span>} */}
        </button>
      </div>
      {isOpen && (
        <div className="expand__content">
          {/* <!-- ... expand content (children) --> */}

          {children}
        </div>
      )}
    </div>
  );
};

export default Expand;
