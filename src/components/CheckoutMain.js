import React, { useState } from "react";
import "../styles/checkoutMain.scss";
import Product1 from "../assets/images/products/choco-almond2.png";
import Vector3 from "../assets/images/vector/Vector-3.png";
import {
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CheckoutMain = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [showProduct1, setShowProduct1] = useState(true);
  const [showProduct2, setShowProduct2] = useState(true);

  const hideProduct = (productNumber) => {
    if (productNumber === 1) {
      setShowProduct1(false);
    } else if (productNumber === 2) {
      setShowProduct2(false);
    }
  };

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const decrement1 = () => {
    setCount1(count1 - 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    setCount2(count2 - 1);
  };

  const hideProduct1 = () => {
    setShowProduct1(false);
  };

  const hideProduct2 = () => {
    setShowProduct2(false);
  };

  return (
    <div>
      <Container style={{ padding: "4rem" }}>
        <h2 style={{ fontWeight: "bold", color: "#461a0f" }}>Checkout</h2>
        <Row>
          <Col md={6}>
            <div className='personal-details'>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#461a0f",
                  marginTop: "2rem",
                }}
              >
                Personal details
              </p>
              <div className='main-form-personal'>
                <Nav
                  className='nav-form'
                  variant='underline'
                  defaultActiveKey='/home'
                >
                  <Nav.Item>
                    <Nav.Link href='#'>Guest</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey='link-1'>Sign In</Nav.Link>
                  </Nav.Item>
                </Nav>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "1.5rem",
                  }}
                >
                  Full Name
                </p>
                <Form.Control
                  className='placeholder-form'
                  type='text'
                  placeholder='Your Name'
                  style={{ marginLeft: "1rem", width: "25rem" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "1.5rem",
                  }}
                >
                  Phone Number
                </p>
                <Form.Control
                  className='placeholder-form'
                  type='text'
                  placeholder='(+38) 438 210 587'
                  style={{ marginLeft: "1rem", width: "25rem" }}
                />

                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "1.5rem",
                  }}
                >
                  Email
                </p>
                <Form.Control
                  className='placeholder-form'
                  type='email'
                  placeholder='email@gmail.com'
                  style={{ marginLeft: "1rem", width: "25rem" }}
                />
                <Button className='btn-next' style={{ height: "2.5rem" }}>
                  Next
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6} className='box-wrapper-checkout'>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#461a0f",
                marginTop: "2rem",
              }}
            >
              Order Summary
            </p>
            {/* Produk 1 */}
            <div
              className={`product-order-wrapper ${
                showProduct1 ? "show" : "hide"
              }`}
            >
              <div
                className={`product-order-wrapper ${
                  showProduct2 ? "show" : "hide"
                }`}
              >
                {showProduct1 && (
                  <div className='img-column'>
                    <img
                      src={Vector3}
                      alt='Vector 3'
                      style={{
                        zIndex: 1,
                        width: "100px",
                        position: "absolute",
                        marginLeft: "1rem",
                        marginTop: "1rem",
                      }}
                    />
                    <img
                      src={Product1}
                      alt='gambar produk 1'
                      style={{
                        zIndex: 2,
                        position: "absolute",
                        width: "100px",
                        height: "120px",
                        marginLeft: "1rem",
                        marginTop: "1rem",
                      }}
                    />
                    <p
                      className='text-product'
                      style={{ transform: "translateY(1.5rem)" }}
                    >
                      Black Chocolate with Almond
                      <RxCross2
                        style={{
                          cursor: "pointer",
                          marginLeft: "3rem",
                          width: "24px",
                          height: "24px",
                        }}
                        onClick={() => hideProduct(1)}
                      />
                    </p>

                    <InputGroup
                      className='mb-3 '
                      style={{ width: "fit-content" }}
                    >
                      <Button
                        className='btn-quantity-checkout-main'
                        onClick={decrement1}
                      >
                        -
                      </Button>
                      <FormControl
                        aria-label='Counter'
                        value={count1}
                        readOnly
                        style={{
                          textAlign: "center",
                          width: "4rem",
                          color: "#fff",
                          backgroundColor: "#461a0f",
                          border: "none",
                          marginTop: "3.5rem",
                        }}
                      />
                      <Button
                        className='btn-quantity-checkout-main'
                        onClick={increment1}
                      >
                        +
                      </Button>
                    </InputGroup>
                    <p
                      style={{
                        marginLeft: "25rem",
                        transform: "translateY(-2.5rem)",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      218 $
                    </p>
                  </div>
                )}
              </div>

              {/* Horizontal line */}
              <div class='horizontal-line-checkout-main' />

              {/* Produk 2 */}
              {showProduct2 && (
                <div
                  className='img-column'
                  style={{ transform: "translateY(-14.5rem)" }}
                >
                  <img
                    src={Vector3}
                    alt='Vector 3'
                    style={{
                      zIndex: 1,
                      width: "100px",
                      position: "absolute",
                      marginLeft: "1rem",
                      marginTop: "3rem",
                    }}
                  />
                  <img
                    src={Product1}
                    alt='gambar produk 1'
                    style={{
                      zIndex: 2,
                      position: "absolute",
                      width: "100px",
                      height: "120px",
                      marginLeft: "1rem",
                      marginTop: "3rem",
                    }}
                  />
                  <p
                    className='text-product'
                    style={{ transform: "translateY(3.5rem)" }}
                  >
                    Black Chocolate with Almond
                    <RxCross2
                      style={{
                        cursor: "pointer",
                        marginLeft: "3rem",
                        width: "24px",
                        height: "24px",
                      }}
                      onClick={() => hideProduct(2)}
                    />
                  </p>

                  <InputGroup
                    className='mb-3 '
                    style={{ width: "fit-content" }}
                  >
                    <Button
                      className='btn-quantity-checkout-main-2'
                      onClick={decrement2}
                    >
                      -
                    </Button>
                    <FormControl
                      aria-label='Counter'
                      value={count2}
                      readOnly
                      style={{
                        textAlign: "center",
                        width: "4rem",
                        color: "#fff",
                        backgroundColor: "#461a0f",
                        border: "none",
                        marginTop: "5.5rem",
                      }}
                    />
                    <Button
                      className='btn-quantity-checkout-main-2'
                      onClick={increment2}
                    >
                      +
                    </Button>
                  </InputGroup>
                  <p
                    style={{
                      marginLeft: "25rem",
                      transform: "translateY(-2.5rem)",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    218 $
                  </p>
                </div>
              )}
            </div>
            <Link to='/success-order' className='checkout-main-link'>
              <Button className='btn-checkout-main'>Checkout</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutMain;
