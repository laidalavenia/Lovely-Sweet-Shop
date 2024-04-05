import React, { useState } from "react";
import "../styles/productDetail.scss";
import Header from "../components/Header";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Vector3 from "../assets/images/Vector-3.png";
import Product1 from "../assets/images/products/choco-almond2.png";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='Productdetail'>
      <Header />
      <Container style={{ padding: "1rem" }}>
        <Breadcrumb className='breadcrumb-item'>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/catalog'>Chocolate Bars</Breadcrumb.Item>
          <Breadcrumb.Item href='/product-detail'>
            Black Chocolate with Almond
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 style={{color: "#461a0f", fontSize: "35px", fontWeight: "bold", marginTop: "2rem" }}>
          Black Chocolate with Almond
        </h2>

        {/* Content product detail */}
        <Row>
          <Col md={6}>
            <img
              src={Vector3}
              alt='Vector 3'
              style={{
                zIndex: 1,
                width: "400px",
                position: "absolute",
                top: "18rem",
                left: "14rem",
              }}
            />
            <img
              src={Product1}
              alt='gambar produk 1'
              style={{
                zIndex: 2,
                position: "absolute",
                width: "380px",
                height: "550px",
                top: "15rem",
                left: "14rem",
              }}
            />
          </Col>
          <Col md={6}>
            <Row style={{ marginLeft: "3rem", marginTop: "3rem" }}>
              <Col md={4}>
                <p style={{ fontWeight: "bold", color: "#461a0f" }}>
                  Ingredients:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "7rem",
                  }}
                >
                  Nutritional Value:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "6rem",
                  }}
                >
                  Energy Value:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "1rem",
                  }}
                >
                  Net Weight:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    marginTop: "1rem",
                  }}
                >
                  Self life:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#461a0f",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  Quantity:
                </p>
              </Col>
              <Col md={8} style={{ fontWeight: "500", color: "#461a0f" }}>
                <p>
                  sugar, marzipan paste, chocolate <br />
                  couverture, orange natural aroma, <br /> powdered milk, cocoa
                  mass, powdered <br /> whey, milk fat, emulsifier soya
                  lecithin, <br /> salt, flavor vanilin.
                </p>
                <p>
                  fats - 32.9 g, of which saturated - 10.8 g; <br />
                  carbohydates - 42.5 g, of which <br />
                  sugar - 41.3 g; proteins - 9.4 kg; <br />
                  salt - 0.01 g.
                </p>
                <p style={{ marginTop: "1.5rem" }}>2108 kj/504 kcal</p>
                <p style={{ marginTop: "1rem" }}>95 g</p>
                <p style={{ marginTop: "1rem" }}>6 months</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputGroup className='mb-3' style={{ width: "fit-content" }}>
                    <Button className='btn-quantity' onClick={decrement}>
                      -
                    </Button>
                    <FormControl
                      aria-label='Counter'
                      value={count}
                      readOnly
                      style={{
                        textAlign: "center",
                        width: "4rem",
                        color: "#fff",
                        backgroundColor: "#461a0f",
                        border: "none",
                      }}
                    />
                    <Button className='btn-quantity' onClick={increment}>
                      +
                    </Button>
                  </InputGroup>
                  <p style={{ marginLeft: "2rem", fontWeight: "bold" }}>
                    218 $
                  </p>
                </div>
              </Col>
            </Row>

            <div
              style={{ display: "flex", marginLeft: "4rem", marginTop: "2rem" }}
            >
              <Link to='/shopping-cart'>
                <Button className='btn-chart-pd' style={{ height: "2.5rem" }}>
                  Add to Chart
                </Button>
              </Link>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "2rem",
                  marginTop: "7px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
