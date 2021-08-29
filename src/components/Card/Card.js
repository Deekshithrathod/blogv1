import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <span className="date">4 days ago</span>
        <h2>Post one</h2>
        <p>Lorem ipsum wzwsxedrct fytguhiugrxsdfggcxdcrftgxdrcftvygu </p>
      </div>
      <div className="card-stats"></div>
    </div>
  );
};

export default Card;
