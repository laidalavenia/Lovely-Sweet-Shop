import React from "react";
import "../styles/newsLetter.scss";
import { Row, Col, Button, Form, Container } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <Container>
      <div className='Newsletter'>
        <Row className='box-wrapper' style={{ padding: "5rem" }}>
          <Col
            md={6}
            className='newsletter-item'
            style={{ alignItems: "center" }}
          >
            <h1 className='about-title-newsletter'>Get Our Newsletter</h1>

            <p className='about-p'>
              Subscribe to our newsletter and know about latest <br />{" "}
              promotions and news!
            </p>
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "center" }}>
            <Form.Control
              className='placeholder-form'
              type='email'
              placeholder='email@gmail.com'
              style={{ marginRight: "10px" }}
            />
            <Button className='btn-subscribe'>Subscribe</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default NewsLetter;
