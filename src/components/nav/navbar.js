import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logoLg from "./assets/nittLogoWide.png";
import logoSm from "./assets/nittLogo.png";
import "./NavBar.css";

const NavbarComponent = () => {
  return (
    <>
      {/* <nav
        className="bg-red-800 flex-1 nav-header"
        style={{
          overflow: "hidden",
          boxShadow: "0 0px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        <div className="container max-w-7xl sm:px-8 mx-auto pb-4 px-2">
          <div className="sm:flex sm:justify-between">
            <img src={logoLg} className="sm:h-16 md:h-24" alt="NITT LOGO" />
          </div>

          <div className="hidden flex justify-around sm:hidden">
            <img src={logoSm} className="h-20" alt="NITT LOGO" />
          </div>
        </div>
      </nav> */}
      <Navbar expand="sm" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-label="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">Dr. Harish SS</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="https://www.nitt.edu/home/academics/departments/mech/faculty/harish/">About</Nav.Link> */}
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#conferences">Conferences</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link href="#academic_responsibilities">Academic Responsibilities</Nav.Link>
            <Nav.Link href="#awards">Awards and Recognition</Nav.Link>
            {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
            {/* <NavDropdown title="Students" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PhD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                PG
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UG</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
