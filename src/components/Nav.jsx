import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

function CustomNavbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top" expanded={expanded}>
      <Container fluid>
        <button className="logo-button" onClick={scrollToTop}>
          <img
            src="public\assets\TapiceriaBenzo-logo.jpg.png"
            alt="Logo"
            className="logo"
          />
        </button>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="d-lg-none d-md-block"
          onClick={() => setExpanded(!expanded)} // Toggle del estado del menú expandido
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className="nav-link nav-link-hover" onClick={closeMenu}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#trabajos" className="nav-link nav-link-hover" onClick={closeMenu}>
              Trabajos
            </Nav.Link>
            <Nav.Link href="#sobrenosotros" className="nav-link nav-link-hover" onClick={closeMenu}>
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="#contacto" className="nav-link nav-link-hover" onClick={closeMenu}>
              Contacto
            </Nav.Link>
            <div className="nav-icon-container-mobile d-lg-none">
              <a
                href="https://instagram.com/tapiceriabenzochivilcoy?igshid=NjIwNzIyMDk2Mg=="
                target="_blank"
              >
                <i className="bx bxl-instagram bx-sm"></i>
              </a>
              <a
                href="https://www.facebook.com/tappezzeria.benzo"
                target="_blank"
              >
                <i className="bx bxl-facebook-square bx-sm"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-icon-container-mobile d-none d-lg-block">
          {/* Logos fuera del menú desplegable (versión de escritorio) */}
          <a
            href="https://instagram.com/tapiceriabenzochivilcoy?igshid=NjIwNzIyMDk2Mg=="
            target="_blank"
          >
            <i className="bx bxl-instagram bx-sm"></i>
          </a>
          <a href="https://www.facebook.com/tappezzeria.benzo" target="_blank">
            <i className="bx bxl-facebook-square bx-sm"></i>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
