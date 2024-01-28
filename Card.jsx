import React from "react";
import "./Card.css";

export const Card = ({ imgSrc, title, description, btn }) => {
  const handleBtnClick = () => {
    if (btn && btn.props && btn.props.href) {
      window.location.href = btn.props.href;
    }
  };

  return (
    <div className="card-container">
      <img src={imgSrc} className="card-img" alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-descript">{description}</p>
      <button id="card-btn" onClick={handleBtnClick}>
        View Schedule
      </button>
    </div>
  );
};

export default Card;
