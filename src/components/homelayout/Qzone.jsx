import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playimg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} />
        <img src={classImg} />
        <img src={playimg} />
      </div>
    </div>
  );
};

export default Qzone;
