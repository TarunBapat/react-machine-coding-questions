import React from "react";

const Card = ({ id, title, price, description, category, image }) => {
  return (
    <div style={{ border: "1px solid", width: "300px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={category} />
    </div>
  );
};

export default Card;
