import React from "react";
import "../styles/bestSeller.scss";
import { Container } from "react-bootstrap";
import CardProducts from "./CardProducts";

const BestSeller = () => {
  return (
    <Container style={{ padding: "3rem" }}>
      <h1
        className='title'
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "2rem",
          marginTop: "2rem",
          color: "#461a0f",
        }}
      >
        Best Sellers
      </h1>
      <CardProducts />
    </Container>
  );
};

export default BestSeller;
