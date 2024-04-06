import React from "react";
import "../styles/categories.scss";
import { Container, Row, Col } from "react-bootstrap";
import Candy from "../assets/images/categories/candy-choco.png";
import ChocoBar from "../assets/images/categories/bar-choco.png";
import DietSweets from "../assets/images/categories/peanut-choco.png";
import GiftSweets from "../assets/images/categories/gift-choco.png";

const Categories = () => {
  return (
    <Container style={{ padding: "1rem" }}>
      <h1
        className='title'
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "1rem",
          marginTop: "2rem",
          color: "#461a0f",
        }}
      >
        Our Categories
      </h1>
      <div
        className='category-items'
        style={{
          display: "flex",
          marginTop: "2rem",
          justifyContent: "center",
        }}
      >
        <Row style={{ margin: "0 50px" }}>
          <Col
            md={6}
            className='category-item'
            style={{ display: "flex", alignItems: "center" }}
          >
            <a
              href='#'
              className='text-categories'
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "120px",
                color: "#461a0f",
              }}
            >
              Candy
            </a>
            <img
              src={Candy}
              width='170'
              height='220'
              alt='Candy'
              style={{ marginLeft: "130px", marginRight: "20px" }}
            />
          </Col>
          <Col
            md={6}
            className='category-item'
            style={{ marginTop: "2rem", display: "flex", alignItems: "center" }}
          >
            <a
              href='#'
              className='text-categories'
              style={{
                marginLeft: "20px",
                // marginRight: "20px",
                marginTop: "120px",
                color: "#461a0f",
              }}
            >
              Diet Sweets
            </a>
            <img
              src={DietSweets}
              width='170'
              height='220'
              alt='Diet Sweets'
              style={{ marginLeft: "90px", marginRight: "20px" }}
            />
          </Col>
        </Row>
        <Row style={{ margin: "0 20px" }}>
          <Col
            md={6}
            className='category-item'
            style={{ display: "flex", alignItems: "center" }}
          >
            <a
              href='#'
              className='text-categories'
              style={{
                marginLeft: "8px",
                // marginRight: "20px",
                marginTop: "120px",
                color: "#461a0f",
              }}
            >
              Chocolate Bar
            </a>
            <img
              src={ChocoBar}
              width='170'
              height='220'
              alt='Choco Bar'
              style={{ marginLeft: "90px", marginRight: "20px" }}
            />
          </Col>
          <Col
            md={6}
            className='category-item'
            style={{ marginTop: "2rem", display: "flex", alignItems: "center" }}
          >
            <a
              href='#'
              className='text-categories'
              style={{
                marginLeft: "20px",
                // marginRight: "20px",
                marginTop: "120px",
                color: "#461a0f",
              }}
            >
              Gift Sweets
            </a>
            <img
              src={GiftSweets}
              width='180'
              height='200'
              alt='Gift Sweets'
              style={{ marginLeft: "90px", marginRight: "20px" }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Categories;
