import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Card.css"; // Estilos CSS para la tarjeta

const Card = ({ title, images }) => {
  
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-carousel carousel-container">
        <Carousel
          showArrows={true}
          showThumbs={false}
          thumbWidth={90} // Ajusta el ancho de las miniaturas como desees
          centerMode
          centerSlidePercentage={100}
        >
          {images.map((image, index) => (
            <div key={index} className="img-carousel-container">
              {/* Aplica estilos para controlar el tamaño de las imágenes */}
              <img
                className="carousel-image"
                src={image}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
     
    </div>
  );
};

export default Card;
