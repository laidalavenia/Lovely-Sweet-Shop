import React from "react";
import "../styles/about.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import VectorLine from "../assets/images/about/Vector-line-about.png";
import VectorRed from "../assets/images/about/Vector-red-about.png";
import VectorChoco from "../assets/images/about/Vector-choco-about.png";
import { RiArrowRightSLine } from "react-icons/ri";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          padding: "2rem",
          justifyContent: "center",
        }}
      >
        <Col
          md={6}
          style={{
            marginTop: "6rem",
          }}
        >
          <h1 className='about-title'>About Us</h1>
          <p className='about-p' style={{ marginTop: "3rem" }}>
            Lovely Sweets is an online swet shop with a large collection <br />
            of candles and chocolate. Our sweets are made from only <br />
            the best natural ingredients.Here you can find a special gift <br />{" "}
            chocolate for any event or celebration. There is also a line of{" "}
            <br /> healthy sweets without sugar, nuts, dairy products.
          </p>
          <Button className='btn-shop'>
            Go to Shop <RiArrowRightSLine className='arrow-right' />{" "}
          </Button>
        </Col>
        <Col
          md={6}
          style={{
            padding: "1rem",
            position: "relative",
            marginRight: "-8rem", //beri jarak untuk kedua kolom
          }}
        >
          <div className='image-stack'>
            <img
              src={VectorRed}
              width='400'
              height='390'
              alt='Vector Red'
              style={{
                marginTop: "3rem",
                zIndex: 1,
                position: "absolute",
              }}
            />
            <img
              src={VectorLine}
              width='400'
              height='390'
              alt='Vector Line'
              style={{
                marginTop: "1.5rem",
                zIndex: 3,
                position: "absolute",
                height: "450px",
                width: "450px",
              }}
            />

            <img
              src={VectorChoco}
              width='400'
              height='390'
              alt='Vector Choco'
              style={{
                marginTop: "3rem",
                zIndex: 3,
                height: "450px",
                width: "420px",
                position: "absolute",
              }}
            />
          </div>
        </Col>
      </Row>
      <NewsLetter />
    </Container>
  );
};

export default About;
