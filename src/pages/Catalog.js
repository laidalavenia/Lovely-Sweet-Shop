import React from "react";
import "../styles/catalog.scss";
import Header from "../components/Header";
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Form,
  Card,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import Vector3 from "../assets/images/vector/Vector-3.png";
import Product1 from "../assets/images/products/choco-almond2.png";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Catalog = () => {
  return (
    <div className='Catalog'>
      <Header />
      <Container style={{ padding: "1rem" }}>
        <Breadcrumb className='breadcrumb-item'>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/catalog'>Chocolate Bars</Breadcrumb.Item>
        </Breadcrumb>
        <h2 style={{color: "#461a0f", fontWeight: "bold" }}>Chocolate Bars</h2>
        <Row className='row-filter'>
          <Col md={6}>
            <div className='text-option-wrapper'>
              <p className='text-option'>
                Milk Chocolate <RxCross2 />
              </p>
              <p className='text-clear'>Clear All</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='text-filter-wrapper'>
              <p className='text-filter'>Sort by :</p>
              <p className='text-filter-option'>
                Price Low to High <MdKeyboardArrowDown />
              </p>
            </div>
          </Col>
        </Row>

        {/* Row section 1 */}
        <Row>
          <Col md={3} className='row-product-wrapper'>
            <p className='title-option'>Fill by Price</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Control
                className='placeholder-form'
                type='text'
                placeholder='50'
                style={{ width: "70px", marginRight: "10px" }}
              />

              <IoRemoveOutline
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                }}
              />

              <Form.Control
                className='placeholder-form'
                type='text'
                placeholder='300'
                style={{ width: "70px", marginLeft: "20px" }}
              />
            </div>
            <Form.Range className='form-range' />
            <Form>
              <p className='title-option'>Chocolate Type</p>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className='mb-3'>
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Milk Chocolate`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Dark Chocolate`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`White Chocolate`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              <p className='title-option'>Filling</p>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className='mb-3'>
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Fruit`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Jam`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Nuts & Chews`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              <p className='title-option'>Dietary</p>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className='mb-3'>
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Kosher`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Sugar Free`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Nut Free`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Diary Free`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Egg Free`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Soy Free`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              <p className='title-option'>Gift Chocolate</p>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className='mb-3'>
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Boxed Chocolate`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`Gift Sets`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`For Your Sweetheart`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`For Family`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`For Kids`}
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    label={`For Friends`}
                  />
                </div>
              ))}
            </Form>
          </Col>

          {/* Row section 2 */}
          <Col md={3} style={{ marginTop: "1rem", marginLeft: "2rem" }}>
            {/* Card Line 2-1 */}
            <Card
              style={{
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge-2-1'>Sale</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />

              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />

              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 2-2 */}
            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 2-3 */}
            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 2-4 */}

            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge'>Top Sales</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Row section 3 */}
          <Col md={3} style={{ marginTop: "1rem" }}>
            {/* Card Line 3-1 */}
            <Card
              style={{
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge-3-1'>Sugar Free</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 3-2 */}
            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge'>Top Sales</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 3-3 */}
            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Row section 4 */}
          <Col md={3} style={{ marginTop: "1rem" }}>
            {/* Card Line 4-1 */}
            <Card
              style={{
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge'>Top Sales</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 4-2 */}
            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge'>Top Sales</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>

            {/* Card Line 4-3 */}
            <Card
              style={{
                marginTop: "1rem",
                width: "15rem",
                backgroundColor: " #FCE9E9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Badge className='custom-badge'>Top Sales</Badge>
              <GrFavorite
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "12rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              />
              <img
                src={Vector3}
                alt='Vector 3'
                style={{
                  zIndex: 1,
                  width: "150px",
                  marginLeft: "3rem",
                  marginTop: "1rem",
                }}
              />
              <Card.Img
                variant='top'
                src={Product1}
                style={{
                  zIndex: 2,
                  position: "absolute",
                  width: "150px",
                  height: "200px",
                  marginLeft: "2rem",
                  marginTop: "4px",
                }}
              />
              <Card.Body>
                <Card.Title className='card-title-catalog'>
                  <Link to='/product-detail' className='product-link'>
                    {" "}
                    Black Chocolate with Almond{" "}
                  </Link>
                </Card.Title>
                <p className='weight-tag-catalog'>Weight: 100 g</p>
                <p className='price-tag-catalog'>105 $</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className='btn-chart-catalog'>Add to Chart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Products />
      </Container>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Catalog;
