import React from "react";
import "../styles/homepageContent.scss";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import About from "../components/About";
import Footer from "../components/Footer";
import Vector1 from "../assets/images/Vector-1.png";
import Vector2 from "../assets/images/Vector-2.png";
import Vector3 from "../assets/images/Vector-3.png";
import Choco1 from "../assets/images/choco-1.png";
import Choco2 from "../assets/images/choco-2.png";
import Choco3 from "../assets/images/choco-3.png";

const HomepageContent = () => {
  return (
    <div className='Homepage'>
      <Header />
      <Row
        style={{
          display: "flex",
          padding: "2rem",
          marginLeft: "50px",
          justifyContent: "center",
        }}
      >
        <Col
          md={6}
          className='home-first'
          style={{
            marginRight: "30rem",
            marginTop: "6rem",
          }}
        >
          <p className='text-leftup'>Large Collection of</p>
          <h1 className='text-middle'>
            Sweets and <br /> Chocolate
          </h1>
          <p className='text-leftdown'>
            Choose from over 100 different sweets to <br /> create your own,
            unique selection of <br /> personal favorites!
          </p>
        </Col>
        <Col
          md={6}
          style={{
            marginLeft: "40rem",
            padding: "1rem",
          }}
        >
          <div className='image-stack-wrapper'>
            <img
              src={Vector1}
              width='400'
              height='390'
              className='d-inline-block align-top'
              alt='Vector 1'
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 3,
                marginBottom: "-5rem",
              }}
            />
            <img
              src={Vector2}
              width='400'
              height='390'
              className='d-inline-block align-top'
              alt='Vector 2'
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 2,
                marginBottom: "-5rem",
              }}
            />
            <img
              src={Vector3}
              width='400'
              height='390'
              className='d-inline-block align-top'
              alt='Vector 3'
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 3,
                marginBottom: "-5rem",
              }}
            />
            <img
              src={Choco1}
              width='80'
              height='50'
              alt='Choco 1'
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 4,
                marginBottom: "-7rem",
                marginLeft: "-8rem",
                width: "350px",
                height: "200px",
              }}
            />
            <img
              src={Choco2}
              width='80'
              height='50'
              alt='Choco 2'
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 4,
                marginBottom: "9rem",
                marginLeft: "5rem",
                width: "240px",
                height: "400px",
              }}
            />
            <img
              src={Choco3}
              width='80'
              height='50'
              alt='Choco 3'
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 4,
                marginBottom: "-9rem",
                marginLeft: "12rem",
                width: "250px",
                height: "300px",
              }}
            />
          </div>
        </Col>
      </Row>
      <Categories />
      <BestSeller />
      <About />
      <Footer />
    </div>
  );
};

export default HomepageContent;
