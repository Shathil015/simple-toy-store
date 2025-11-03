import React from "react";

const ToyDetailsCard = ({ toy }) => {
  //   console.log(toy);
  return (
    <div className="w-full max-auto">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={toy.image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toy.name}</h2>
          <p>{toy.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
