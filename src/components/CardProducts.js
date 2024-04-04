import React from "react";
import "../styles/cardProducts.scss";
import { Row, Col, Button, Card, Badge } from "react-bootstrap";
import Produk from "../assets/images/stack-chocolate.png";
import Vector3 from "../assets/images/Vector-3.png";

const CardProducts = () => {
  return (
    <Row style={{ marginLeft: "1rem" }}>
      <Col md={3}>
        <Card
          style={{
            width: "13rem",
            backgroundColor: " #FCE9E9",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Badge className='custom-badge-cardProducts'>Top Sales</Badge>
          <img
            src={Vector3}
            alt='Vector 3'
            style={{
              zIndex: 1,
              width: "150px",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          />
          <Card.Img
            variant='top'
            src={Produk}
            style={{
              zIndex: 2,
              position: "absolute",
              width: "150px",
              height: "220px",
            }}
          />
          <Card.Body>
            <Card.Title className='card-title-cardProducts'>
              Black Chocolate with Honey
            </Card.Title>
            <p className='weight-tag-cardProducts'>Weight: 100 g</p>
            <p className='price-tag-cardProducts'>105 $</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className='btn-chart-cardProducts'>Add to Chart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card
          style={{
            width: "13rem",
            backgroundColor: " #FCE9E9",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Badge className='custom-badge-cardProducts2'>Sale</Badge>
          <img
            src={Vector3}
            alt='Vector 3'
            style={{
              zIndex: 1,
              width: "150px",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          />
          <Card.Img
            variant='top'
            src={Produk}
            style={{
              zIndex: 2,
              position: "absolute",
              width: "150px",
              height: "220px",
            }}
          />
          <Card.Body>
            <Card.Title className='card-title-cardProducts'>
              Black Chocolate with Honey
            </Card.Title>
            <p className='weight-tag-cardProducts'>Weight: 100 g</p>
            <p className='price-tag-cardProducts'>105 $</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className='btn-chart-cardProducts'>Add to Chart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card
          style={{
            width: "13rem",
            backgroundColor: " #FCE9E9",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Badge className='custom-badge-cardProducts'>Top Sales</Badge>
          <img
            src={Vector3}
            alt='Vector 3'
            style={{
              zIndex: 1,
              width: "150px",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          />
          <Card.Img
            variant='top'
            src={Produk}
            style={{
              zIndex: 2,
              position: "absolute",
              width: "150px",
              height: "220px",
            }}
          />
          <Card.Body>
            <Card.Title className='card-title-cardProducts'>
              Black Chocolate with Honey
            </Card.Title>
            <p className='weight-tag-cardProducts'>Weight: 100 g</p>
            <p className='price-tag-cardProducts'>105 $</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className='btn-chart-cardProducts'>Add to Chart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card
          style={{
            width: "13rem",
            backgroundColor: " #FCE9E9",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Badge className='custom-badge-cardProducts'>Top Sales</Badge>
          <img
            src={Vector3}
            alt='Vector 3'
            style={{
              zIndex: 1,
              width: "150px",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          />
          <Card.Img
            variant='top'
            src={Produk}
            style={{
              zIndex: 2,
              position: "absolute",
              width: "150px",
              height: "220px",
            }}
          />
          <Card.Body>
            <Card.Title className='card-title-cardProducts'>
              Black Chocolate with Honey
            </Card.Title>
            <p className='weight-tag-cardProducts'>Weight: 100 g</p>
            <p className='price-tag-cardProducts'>105 $</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className='btn-chart-cardProducts'>Add to Chart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardProducts;
