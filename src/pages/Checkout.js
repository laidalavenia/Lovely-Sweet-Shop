import React from "react";
import HeaderCheckout from "../components/HeaderCheckout";
import CheckoutMain from "../components/CheckoutMain";
import FooterCheckoutMain from "../components/FooterCheckoutMain";

const Checkout = () => {
  return (
    <div className='Checkout'>
      <HeaderCheckout />
      <CheckoutMain />
      <FooterCheckoutMain/>
    </div>
  );
};

export default Checkout;
