import React from "react";

const ToyCard = ({ toy }) => {
  const { name, image, price, description } = toy;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
