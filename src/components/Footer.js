import React from "react";
import "../styles/footer.scss";
import logo from "../assets/logo/logo-sweetshop.png";
import mastercardLogo from "../assets/logo/mastercard-logo.png";
import verfiedVisaLogo from "../assets/logo/verifiedVisa-logo.png";
import { Row, Col } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineCopyright } from "react-icons/ai";
import { IoRemoveOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <Row>
        <Col md={3}>
          <img
            src={logo}
            alt="logo"
            width={80}
            height={80}
            style={{
              marginLeft: "5rem",
              marginTop: "2rem",
              filter: "brightness(0) invert(1)", //// Memberikan efek transparan putih
            }}
          ></img>
        </Col>
        <Col md={3}>
          <div class='vertical-text'>
            <a href='#'>Shop</a>
            <a href='#'>About Us</a>
            <a href='#'>Categories</a>
            <a href='#'>Gift Sweets</a>
            <a href='#'>Sales</a>
          </div>
        </Col>
        <Col md={3}>
          <div class='vertical-text'>
            <a href='#'>Information</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Payment and delivery</a>
            <a href='#'>Terms and Conditions</a>
            <a href='#'>FAQs</a>
          </div>
        </Col>
        <Col md={3}>
          <div class='vertical-text'>
            <a href='#'>Call center</a>
            <p href='#'>+38 (097) 600 38 38</p>
            <p href='#'>+38 (097) 609 34 25</p>
            <p href='#'>+38 (097) 610 37 98</p>
            <div className='icon-footer'>
              <a href='#'>
                <FiFacebook />
              </a>
              <a href='#'>
                <FiTwitter />{" "}
              </a>
              <a href='#'>
                <FiInstagram />{" "}
              </a>
              <a href='#'>
                <MdOutlineMail />{" "}
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <div class='footer-line' />
      <div className='footer-copyright'>
        <AiOutlineCopyright />
        <p>
          Online store "Lovely Sweets" <IoRemoveOutline /> 2005 - 2023
        </p>
        <div className='footer-logo'>
          <img alt="card-logo" src={mastercardLogo} />
          <img alt="visa-logo" src={verfiedVisaLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
