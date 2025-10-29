import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://thumbs.dreamstime.com/b/toy-shop-vector-illustration-44343207.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Fully Prepared For Baby</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <button className="btn btn-secondary rounded-2xl">EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
