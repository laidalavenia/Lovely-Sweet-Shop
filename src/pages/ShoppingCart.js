import React, { useState } from "react";
import "../styles/shoppingCart.scss";
import Header from "../components/Header";
import Product1 from "../assets/images/products/choco-almond2.png";
import Vector3 from "../assets/images/Vector-3.png";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { CiGift } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [showProduct1, setShowProduct1] = useState(true);
  const [showProduct2, setShowProduct2] = useState(true);

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
    <div className='ShoppingCart'>
      <Header />
      <Container style={{ padding: "6rem" }}>
        <h2 style={{ fontWeight: "bold", color: "#461a0f" }}>ShoppingCart</h2>
        <Row className='header-shoppingcart'>
          <Col md={4}>
            <p>Product</p>
          </Col>
          <Col md={2}>
            <p>Price</p>
          </Col>
          <Col md={3}>
            <p>Quantity</p>
          </Col>
          <Col md={2}>
            <p>Total</p>
          </Col>
          <Col md={1}></Col>
        </Row>
        <div class='horizontal-line-shoppingcart'></div>

        {/* konten product 1*/}
        {showProduct1 && (
          <Row style={{ marginTop: "2rem" }}>
            <Col md={4}>
              <div className='img-column'>
                <img
                  src={Vector3}
                  alt='Vector 3'
                  style={{
                    zIndex: 1,
                    width: "100px",
                    position: "absolute",
                    marginLeft: "1rem",
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
                  }}
                />
              </div>
              <p className='text-product'>Black Chocolate with Almond</p>
              <p className='weight-tag-products'>95 g</p>
            </Col>
            <Col md={2}>
              <p className='price-tag'>109 $</p>
            </Col>
            <Col md={3}>
              <InputGroup className='mb-3' style={{ width: "fit-content" }}>
                <Button className='btn-quantity' onClick={decrement1}>
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
                  }}
                />
                <Button className='btn-quantity' onClick={increment1}>
                  +
                </Button>
              </InputGroup>
            </Col>
            <Col md={2}>
              <p className='price-tag'>218 $</p>
            </Col>
            <Col md={1} style={{ cursor: "pointer" }} onClick={hideProduct1}>
              <RxCross2 />
            </Col>
          </Row>
        )}

        {/* konten product 2*/}
        {showProduct2 && (
          <Row style={{ marginTop: "2rem" }}>
            <Col md={4}>
              <div className='img-column'>
                <img
                  src={Vector3}
                  alt='Vector 3'
                  style={{
                    zIndex: 1,
                    width: "100px",
                    position: "absolute",
                    marginLeft: "1rem",
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
                  }}
                />
              </div>
              <p className='text-product'>Black Chocolate with Almond</p>
              <p className='weight-tag-products'>95 g</p>
            </Col>
            <Col md={2}>
              <p className='price-tag'>109 $</p>
            </Col>
            <Col md={3}>
              <InputGroup className='mb-3' style={{ width: "fit-content" }}>
                <Button className='btn-quantity' onClick={decrement2}>
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
                  }}
                />
                <Button className='btn-quantity' onClick={increment2}>
                  +
                </Button>
              </InputGroup>
            </Col>
            <Col md={2}>
              <p className='price-tag'>218 $</p>
            </Col>
            <Col md={1} style={{ cursor: "pointer" }} onClick={hideProduct2}>
              <RxCross2 />
            </Col>
          </Row>
        )}

        <div
          class='horizontal-line-shoppingcart'
          style={{ marginTop: "2rem" }}
        />

        {/* Pembayaran */}
        <Row>
          <Col md={5}>
            <div style={{ display: "flex" }}>
              <CiGift
                style={{
                  color: "red",
                  width: "100px",
                  height: "30px",
                  marginTop: "3rem",
                  transform: "translateX(-1rem)",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "500",
                  fontSize: "15px",
                  marginTop: "3.5rem",
                  transform: "translateX(-4rem)",
                  cursor: "pointer",
                }}
              >
                Add a Gift Box
              </p>
            </div>
          </Col>
          <Col md={4}>
            <p className='text-product' style={{ marginTop: "3rem" }}>
              Total to Pay :
            </p>
          </Col>
          <Col md={3}>
            <p
              className='price-tag'
              style={{ marginTop: "3rem", fontSize: "20px" }}
            >
              120 $
            </p>
          </Col>
        </Row>

        {/* Continue shopping & checkout */}
        <Row>
          <Col md={6}>
            <Link to='/catalog' className='shopping-link'>
              <div style={{ display: "flex" }}>
                <MdOutlineKeyboardArrowLeft
                  style={{
                    color: "red",
                    width: "30px",
                    height: "50px",
                    marginTop: "1rem",
                    transform: "translateX(1rem)",
                    cursor: "pointer",
                  }}
                />

                <p
                  style={{
                    color: "red",
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "1.9rem",
                    transform: "translateX(-0.4rem)",
                    cursor: "pointer",
                  }}
                >
                  Continue to Shopping
                </p>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <Link to='/checkout'>
              <Button className='btn-checkout' style={{ height: "2.5rem" }}>
                Checkout
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingCart;
