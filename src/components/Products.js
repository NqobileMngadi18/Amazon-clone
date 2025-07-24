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
          title="Ricoh GRIIIx Urban Edition APS-C Compact Digiital Camera with GC-11 Casek"
          image="https://m.media-amazon.com/images/I/61SZjQN6BAL._AC_UL480_QL65_.jpg"
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
          title="Apple iPhone 16 Pro Max 256 GB: 5G Smartphone with Apple Intelligence, Camera Control, a18 Chip and a Huge Leap in Battery Life"
          image="https://m.media-amazon.com/images/I/61iUn+SmbeL._AC_UL480_QL65_.jpg"
          rating={5}
          price={7999.99}
        />
        <Product
          id="5"
          title="DJI Avata 2 Fly More Combo FPV Drone with Three Batteries"
          image="https://m.media-amazon.com/images/I/611rw1ykrAL._AC_SL1500_.jpg"
          rating={2}
          price={269.99}
        />
      </div>
      <div className="products_row">
      <Product
          id="6"
          title="Tapo C425 Smart Wire-Free Security Camera (Pack of 2)0"
          image="https://m.media-amazon.com/images/I/41Pn5VfbSgL._AC_UL480_QL65_.jpg"
          rating={2}
          price={54.99} 
        />
      </div>
    </>
  );
};

export default Products;
