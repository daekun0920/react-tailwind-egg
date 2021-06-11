import React from "react";
import ImageOne from "../images/egg1.jpg";
import ImageTwo from "../images/egg2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Sandwich</h2>
          <p className="mb-2">Crispy, Delicious, and Nutritious</p>
          <span>$15</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Sandwich</h2>
          <p className="mb-2">Crispy, Delicious, and Nutritious</p>
          <span>$15</span>
        </div>
      </div>
    </>
  );
};

export default Content;
