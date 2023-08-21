import React from "react";
import "./Section.css";
function Section() {
  return (
    <section className="section-help">
      <div className="help-container">
        <p>
          Comprendemos el valor que cada mueble tiene en tu hogar y por eso te
          ofrecemos una amplia selección de alternativas. Queremos que
          encuentres la tela perfecta para el espacio que tus muebles ocupan. Ya
          sea que busques resistencia, confort o un diseño exclusivo, en
          Tapicería Benzo te acompañamos durante todo el proceso para lograr un
          resultado impecable.
        </p>
      </div>
      <div className="contact-image">
        <img
          src="public\assets\headertapiceria.png"
          alt="Ejemplo de mueble tapizado"
        />
      </div>
    </section>
  );
}

export default Section;
