import React from "react";
import "./Home.css";
import Card from "../components/Carousel"; // Importa el componente Card
import Header from "../components/Header";
import UsSection from "../components/UsSection";
import Section from "../components/Section";
import Footer from "../components/Footer";

function Home() {
  const AsientosImages = [
    "../assets/Asiento-5.jpeg",
    "../assets/Asiento-6.jpeg",
    "../assets/Asiento-7.jpeg",
    "../assets/Asiento-9.jpeg",
    "../assets/Asiento-4.jpeg",
    "../assets/Asiento-10.jpeg",
  ];

  const SillasImages = [
    "../assets/Silla-1.jpeg",
    "../assets/Silla-2.jpeg",
    "../assets/Silla-3.jpeg",
    "../assets/Silla-4.jpeg",
    "../assets/Silla-5.jpeg",
    "../assets/Silla-6.jpeg",
    "../assets/Silla-7.jpeg",
    "../assets/Silla-8.jpeg",
    "../assets/Silla-9.jpeg",
    "../assets/Silla-10.jpeg",
    "../assets/Silla-12.jpeg",
    "../assets/Silla-13.jpeg",
    "../assets/Silla-14.jpeg"
  ];
  const SillonesImages = [
    "../assets/Sillon-1.jpeg",
    "../assets/Sillon-2.jpeg",
    "../assets/Sillon-3.jpeg",
    "../assets/Sillon-4.jpeg",
    "../assets/Sillon-5.jpeg",
    "../assets/Sillon-6.jpeg",
    "../assets/Sillon-7.jpeg",
    "../assets/Sillon-8.jpeg",
    "../assets/Sillon-9.jpeg",
    "../assets/Sillon-10.jpeg",
    "../assets/Sillon-12.jpeg",
    "../assets/Sillon-13.jpeg",
    
  ];
  const ReposerasImages = [
    "../assets/Reposera-3.jpeg",
    "../assets/Reposera-4.jpeg",
    "../assets/Reposera-5.jpeg",
    "../assets/Reposera-6.jpeg",
  ];
  return (
    <>
      <Header />
      <div id="inicio" className="container">
        <div className="head">
          <div className="img-header">
            <img src="../assets/TapiceriaBenzo-logo.jpg.png" alt="" />
          </div>
          <p>
            ¡Bienvenido a nuestra distinguida tapicería de muebles, donde la
            excelencia es nuestro estándar y la calidad es nuestra firma!
          </p>
        </div>

        <div id="trabajos" className="card-container">
          <Card
            title="Sillones"
            images={SillonesImages} // Utiliza las rutas de las imágenes directamente
          />

          <Card
            title="Sillas"
            images={SillasImages} // Utiliza las rutas de las imágenes directamente
          />
          <Card
            title="Asientos de Moto"
            images={AsientosImages} // Utiliza las rutas de las imágenes directamente
          />
          <Card
            title="Reposeras"
            images={ReposerasImages} // Utiliza las rutas de las imágenes directamente
          />
        </div>
      </div>
      <div id="sobrenosotros">
        <Section />
      </div>

      <UsSection />

      <div id="contacto">
        <Footer />
      </div>
    </>
  );
}

export default Home;
