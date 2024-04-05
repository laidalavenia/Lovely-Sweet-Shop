import React from "react";
import "../styles/reviews.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
  return (
    <div className='Reviews' style={{ marginBottom: "5rem" }}>
      <Container>
        <h2
          style={{
            fontWeight: "bold",
            color: "#461a0f",
            marginLeft: "5rem",
            marginTop: "5rem",
            marginBottom: "-4rem",
          }}
        >
          Reviews
        </h2>
        <Row>
          {/* Review pertama */}
          <Col md={6} className='box-wrapper-reviews'>
            <p style={{ fontWeight: "bold" }}>Ksenia</p>
            <p style={{ color: "#858181" }}>28.09.2022</p>
            <div className='icon-star'>
              {[...Array(4)].map((_, index) => (
                <FaStar
                  key={index}
                  style={{
                    color: "#f0768b",
                    width: "20px",
                    marginRight: "5px",
                  }}
                />
              ))}
              {[...Array(1)].map((_, index) => (
                <FaRegStar
                  key={index}
                  style={{
                    color: "black",
                    width: "20px",
                    marginRight: "5px",
                  }}
                />
              ))}
            </div>
            <p>Very delicate chocolate! I love it! Thank you</p>

            {/* Review kedua */}

            <Col md={6} className='box-wrapper-reviews-2'>
              <p style={{ fontWeight: "bold" }}>Denys</p>
              <p style={{ color: "#858181" }}>05.11.2022</p>
              <div className='icon-star'>
                {[...Array(3)].map((_, index) => (
                  <FaStar
                    key={index}
                    style={{
                      color: "#f0768b",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                ))}
                {[...Array(2)].map((_, index) => (
                  <FaRegStar
                    key={index}
                    style={{
                      color: "black",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                ))}
              </div>
              <p style={{ marginTop: "1rem" }}>
                Thank you very much for the delicious chocolate and the pleasant
                combination of ingredients. Very tasty.
              </p>
            </Col>

            {/* Review ketiga */}
            <Col md={6} className='box-wrapper-reviews-3'>
              <p style={{ fontWeight: "bold" }}>Ksenia</p>
              <p style={{ color: "#858181" }}>28.09.2022</p>
              <div className='icon-star'>
                {[...Array(4)].map((_, index) => (
                  <FaStar
                    key={index}
                    style={{
                      color: "#f0768b",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                ))}
                {[...Array(1)].map((_, index) => (
                  <FaRegStar
                    key={index}
                    style={{
                      color: "black",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                ))}
              </div>
              <p style={{ marginTop: "1rem" }}>
                Chocolate is very tasty. Thank you
              </p>
            </Col>
            {/* Button more */}
            <div className='btn-more'>
              <p>More</p>
            </div>
          </Col>

          {/* Form feedback */}
          <Col md={6} className='box-wrapper-feedback'>
            <h5
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#461a0f",
              }}
            >
              Give Feedback
            </h5>
            <div className='form-feddback'>
              <p style={{ fontWeight: "bold", color: "#461a0f" }}>Name</p>
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
                Email
              </p>
              <Form.Control
                className='placeholder-form'
                type='email'
                placeholder='email@gmail.com'
                style={{ marginLeft: "1rem", width: "25rem" }}
              />

              <p
                style={{
                  fontWeight: "bold",
                  color: "#461a0f",
                  marginTop: "1.5rem",
                }}
              >
                Review
              </p>
              <Form.Control
                className='placeholder-form'
                type='text'
                placeholder='Your Review'
                style={{
                  marginLeft: "1rem",
                  height: "100px",
                  width: "25rem",
                }}
              />
            </div>
            <Button className='btn-feedback' style={{ height: "2.5rem" }}>
              Give Feedback
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
