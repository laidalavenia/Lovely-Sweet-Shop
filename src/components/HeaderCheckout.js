import React from "react";
import "../styles/headerCheckout.scss";
import { Row, Col, Container } from "react-bootstrap";
import logoHeader from "../assets/logo/logo-sweetshop.png";
import CheckoutMain from "./CheckoutMain";

const HeaderCheckout = () => {
  return (
    <Container>
      <Row style={{ padding: "1rem" }}>
        <Col md={4}>
          <img
            src={logoHeader}
            alt='logo-navbar'
            width={50}
            height={40}
            style={{ marginLeft: "1rem" }}
          />
        </Col>
        <Col
          md={4}
          style={{
            color: "#461a0f",
            fontWeight: "500",
            transform: "translateX(16rem)",
          }}
        >
          <p style={{ fontSize: "14px" }}>Support (9.00 - 22.00)</p>
          <p style={{ fontSize: "14px", color: "#b22222", fontWeight: "bold" }}>
            +38 (097) 812 983
          </p>
        </Col>
      </Row>
      <div class='horizontal-line-checkout'></div>
      <CheckoutMain />
    </Container>
  );
};

export default HeaderCheckout;
