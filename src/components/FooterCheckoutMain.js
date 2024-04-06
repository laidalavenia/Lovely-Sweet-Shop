import React from "react";
import "../styles/footerCheckoutMain.scss";
import { Container } from "react-bootstrap";
import { AiOutlineCopyright } from "react-icons/ai";
import { IoRemoveOutline } from "react-icons/io5";
import mastercardLogo from "../assets/logo/mastercard-logo.png";
import verfiedVisaLogo from "../assets/logo/verifiedVisa-logo.png";

const FooterCheckoutMain = () => {
  return (
    <div className='footerCheckoutMain'>
      <Container style={{ marginTop: "5rem" }}>
        {/* Horizontal line */}
        <div class='horizontal-line-footer-checkout' />
        <div className='footer-copyright-checkout'>
          <AiOutlineCopyright />
          <p>
            Online store "Lovely Sweets" <IoRemoveOutline /> 2005 - 2023
          </p>
          <div className='footer-logo-checkout'>
            <img alt='card-logo' src={mastercardLogo} />
            <img alt='visa-logo' src={verfiedVisaLogo} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterCheckoutMain;
