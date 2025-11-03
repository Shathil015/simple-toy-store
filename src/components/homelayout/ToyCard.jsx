import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { id, name, image, price, description } = toy;
  return (
    <div
      to={`/product-details/${id}`}
      className="card bg-base-100 w-80 mx-5 shadow-sm"
    >
      <figure>
        <img className="w-50 " src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/product-details/${id}`} className="badge badge-outline">
            Details
          </Link>

          <div className="badge badge-outline">Price: ${price}</div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
