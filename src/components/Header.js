import React from "react";
import "../styles/header.scss";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logoNavbar from "../assets/logo/logo-sweetshop.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Row style={{ padding: "1rem", marginLeft: "50px" }}>
        <Col md={2}>
          <img
            src={logoNavbar}
            alt='logo-navbar'
            width={50}
            height={40}
            style={{ marginLeft: "5rem" }}
          />
        </Col>
        <Col md={6}>
          <div className='search-box'>
            <InputGroup>
              <Form.Control className='form-input' placeholder='Search...' />
              <IoSearch className='icon-search' />
            </InputGroup>
          </div>
        </Col>
        <Col md={4}>
          <div className='icon-navright'>
            <IoPersonOutline
              style={{ marginRight: "10px", width: "20px", height: "50px" }}
            />
            <MdFavoriteBorder
              style={{ marginRight: "10px", width: "20px", height: "50px" }}
            />
            <HiOutlineShoppingBag
              style={{ marginRight: "10px", width: "20px", height: "50px" }}
            />
          </div>
        </Col>
      </Row>

      {/* Row kedua */}
      <Row className='row-menu' style={{ padding: "10px" }}>
        <Col md={2}>
          <Link to='/candy' className='navbar-menu-link'>
            Candy{" "}
          </Link>
          <MdKeyboardArrowDown className='navbar-menu' />
        </Col>
        <Col md={2}>
          <Link to='/catalog' className='navbar-menu-link'>
            Chocolate Bars
          </Link>{" "}
          <MdKeyboardArrowDown className='navbar-menu' />
        </Col>
        <Col md={2}>
          <Link to='/diet-sweets' className='navbar-menu-link'>
            Diet Sweets
          </Link>{" "}
          <MdKeyboardArrowDown className='navbar-menu' />
        </Col>
        <Col md={2}>
          <Link to='/gift-sweets' className='navbar-menu-link'>
            Gift Sweets{" "}
          </Link>
          <MdKeyboardArrowDown className='navbar-menu' />
        </Col>
        <Col md={2}>
          <Link to='/about' className='navbar-menu-link'>
            About Us{" "}
          </Link>
          <MdKeyboardArrowDown className='navbar-menu' />
        </Col>
      </Row>
      <div class='horizontal-line'></div>
    </div>
  );
};

export default Homepage;
