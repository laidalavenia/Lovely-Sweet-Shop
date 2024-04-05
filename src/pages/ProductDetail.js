import React from "react";
import ProductDetail from "../components/ProductDetail";
import Reviews from "../components/Reviews";

const ProductDetailPage = () => {
  return (
    <div className='ProductDetail-Page'>
      <ProductDetail />
      <Reviews/>
    </div>
  );
};

export default ProductDetailPage;
