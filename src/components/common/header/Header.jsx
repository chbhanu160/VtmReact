// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";


const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Head />
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle onClick={handleClick} aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="navbar-nav">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/services/learning">Learning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/consulting">Consulting</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
            <div className="start">
              <div className="button">GET CERTIFICATE</div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;