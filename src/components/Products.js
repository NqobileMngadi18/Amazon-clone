import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="HP 15s Intel Celeron N4500 4GB DDR4 256GB SSD 15.6-Inch HD Laptop,
          Natural Silver"
          image="https://m.media-amazon.com/images/I/51xeFczb0NL._SY300_SX300_QL70_ML2_.jpg"
          rating={4}
          price={399.99}
        />
        <Product
          id="2"
          title="Volkano Falcon Series Auxiliary Headphones with Mic, Black"
          image="https://m.media-amazon.com/images/I/41GuM4Noh3L.AC_SX250.jpg"
          rating={5}
          price={179.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="3"
          title="JBL Tune 770NC Noise Cancelling Wireless Over-Ear Headphones, Blue"
          image="https://m.media-amazon.com/images/I/5135Ipe0L1L._AC_SY450_.jpg"
          rating={3}
          price={2399.99}
        />
        <Product
          id="4"
          title="P30 Smart Mini Portable Projector"
          image="https://m.media-amazon.com/images/I/41A87yCZd6L._AC_UL320_.jpg"
          rating={5}
          price={7999.99}
        />
        <Product
          id="5"
          title="Pu Leather Case Hard Shell for Macbook Pro 13inch-Grey Leather"
          image="https://m.media-amazon.com/images/I/517H82V0vSL._AC_UL320_.jpg"
          rating={2}
          price={269.99}
        />
      </div>
      <div className="products_row">
      <Product
          id="6"
          title="5G WiFi Bluetooth Projector, YABER Native 1080P Outdoor Movie Projector with 350"
          image="https://m.media-amazon.com/images/I/61cIWbFma8L._AC_UL320_.jpg"
          rating={2}
          price={2569.99} 
        />
      </div>
    </>
  );
};

export default Products;
