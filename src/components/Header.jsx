import React from "react";
import "./Header.css";
// Asegúrate de que la librería Boxicons esté importada

function Header() {
  return (
    <div className="header-container" id="inicio"> 
      <img
        className="header-img"
        src="public/assets/FrenteTapiceriaBenzo.jpg" // Corrige la ruta de la imagen
        alt=""
      />
      <a
        className="whatsapp-button"
        href="https://wa.me/542346563252"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-whatsapp bx-sm" ></i>
        Contacto
      </a>
    </div>
  );
}

export default Header;
