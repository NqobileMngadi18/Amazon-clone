import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/G/53/RBSxFELA/2025/Abigail/Home-and-Kitchen/Home__Kitchen_DT.gif" 
          alt="Hero img"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
