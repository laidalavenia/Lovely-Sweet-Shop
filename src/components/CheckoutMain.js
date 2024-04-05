import React from "react";
import "../styles/checkout.Main.scss";
import { Container, Nav } from "react-bootstrap";

const CheckoutMain = () => {
  return (
    <div>
      <Container style={{ padding: "4rem" }}>
        <h2 style={{ fontWeight: "bold", color: "#461a0f" }}>Checkout</h2>
        <Nav className='nav-form' variant='underline' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link href='#'>Guest</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey='link-1'>Sign In</Nav.Link>
          </Nav.Item>
        </Nav>
        <p>Halo ini kontennya</p>
      </Container>
    </div>
  );
};

export default CheckoutMain;
