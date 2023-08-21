import React from "react";
import "./UsSection.css";

const UsSection = () => {
  return (
    <section className="contact-section">
      <div className="section-title">
        <h2>¿Por qué elegir Tapicería Benzo?</h2>
      </div>
      <div className="features-list">
        <div className="card-row">
          <div className="card">
            <h4>1. Nosotros</h4>
            <p>
              Con más de seis décadas en el rubro, hemos estado entregando un
              servicio profesional y comprometido a todos nuestros clientes.
              Nuestra larga trayectoria nos respalda, y trabajamos con una
              amplia gama de materiales para garantizar soluciones duraderas y
              de calidad en cada proyecto.
            </p>
          </div>
          <div className="card">
            <h4>2. Servicios</h4>
            <p>
              Nos especializamos en la renovación de una amplia gama de sillas y
              sillones, tanto modernos como de estilo, hasta la transformación
              de muebles para el hogar, espacios de jardín y entornos de
              oficina. Además, nuestra habilidad abarca la revitalización de
              asientos de motos y la creación de soluciones a medida, como
              cerramientos para ventanas y piletas.
            </p>
          </div>
          <div className="card">
            <h4>3. Horarios de Atención</h4>
            <p>
              Nuestro taller está abierto de lunes a viernes, de 9:00 AM a 6:00
              PM. Sábados de 9 AM a 12:30 AM
            </p>
          </div>
          <div className="card">
            <h4>4. Formas de Pago</h4>
            <p>
              Aceptamos diferentes formas de pago, incluyendo efectivo, tarjetas
              de crédito y débito, para brindarte opciones convenientes al pagar
              por nuestros servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsSection;
