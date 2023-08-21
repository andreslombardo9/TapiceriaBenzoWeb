import React from "react";
import "./Footer.css"; // Importa tus estilos CSS aquí

function Footer() {
  return (
    <footer className="footer">
      <div className="address-container">
        <p>Tapicería Benzo</p>
        <p>Dirección: Pueyrredón 227, Chivilcoy, Buenos Aires</p>
      </div>
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://instagram.com/tapiceriabenzochivilcoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram bx-sm"></i>
          </a>
          <a
            href="https://www.facebook.com/tappezzeria.benzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook-square bx-sm"></i>
          </a>
          <a
             href="https://wa.me/542346563252"
             target="_blank"
             rel="noopener noreferrer"
          >
         <i className='bx bxl-whatsapp bx-sm'></i>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Tapicería Benzo. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
