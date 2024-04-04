import React from "react";
import "../styles/productDetail.scss";
import CardProducts from "./CardProducts";

const Products = () => {
  return (
    <div className='Products'>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "2rem",
          marginTop: "2rem",
          color: "#461a0f",
        }}
      >
        Recently Viewed
      </h1>
      <CardProducts />
    </div>
  );
};

export default Products;
