import React from "react";
import "../styles/successOrder.scss";
import Header from "../components/Header";
import vectorLightGreen from "../assets/images/vector/Vector-light-green.png";
import vectorDarkGreen from "../assets/images/vector/Vector-dark-green.png";
import vectorLine from "../assets/images/about/Vector-line-about.png";
import successimg from "../assets/images/success.png";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuceessOrder = () => {
  return (
    <div className='successOrder'>
      <Header />
      <div class='horizontal-line-sc-order' />
      <Container>
        <div className='vector-success'>
          <img
            src={vectorDarkGreen}
            alt='Vector Dark Green'
            style={{
              width: "450px",
              marginLeft: "18rem",
              marginTop: "5rem",
              zIndex: 1,
              position: "absolute",
            }}
          />
          <img
            src={vectorLightGreen}
            alt='Vector Light Green'
            style={{
              width: "450px",
              marginLeft: "18rem",
              marginTop: "6rem",
              zIndex: 2,
              position: "absolute",
            }}
          />
          <img
            src={vectorLine}
            alt='Vector Line'
            style={{
              width: "450px",
              marginTop: "6rem",
              marginLeft: "18rem",
              zIndex: 3,
              position: "absolute",
            }}
          />
          <p
            style={{
              color: "#461a0f",
              fontWeight: "bold",
              fontSize: "20px",
              zIndex: 5,
              position: "absolute",
              marginLeft: "25rem",
              marginTop: "19rem",
            }}
          >
            Successfully ordered
          </p>
          <p
            style={{
              color: "#461a0f",
              fontSize: "12px",
              textAlign: "center",
              zIndex: 5,
              position: "absolute",
              marginLeft: "25rem",
              marginTop: "21rem",
            }}
          >
            Order <b style={{ color: "#461a0f" }}>#4235232</b> has been placed.{" "}
            <br /> After sending your order, we will send a letter <br /> with
            the TTH number.
          </p>
          <Link to='/'>
            <Button className='btn-checkout-sc-order'>Back to Shop</Button>
          </Link>
          <img
            src={successimg}
            alt='success image'
            style={{
              width: "74px",
              marginTop: "14rem",
              marginLeft: "30rem",
              zIndex: 4,
              position: "absolute",
            }}
          />
        </div>

        {/* <FaCircleCheck className='check-success' /> */}
      </Container>
    </div>
  );
};

export default SuceessOrder;
