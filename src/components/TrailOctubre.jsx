import React from "react";
import imgCarousell from "../img/carousel2.webp";
import imgCarousel2 from "../img/carousel3.webp";
import imgCarousel3 from "../img/carousel4.webp";
import LinkButton from "./ui/LinkButton";
import styled from "styled-components";


const ButtonContainer = styled.div`
display: flex;
align-items: start;
justify-content: start;
gap: 1em;
`

export default function TrailOctubre() {
  return (
    <>
      <article>
        <div id="banner-octubre">
          {/*       <!-- Carousel --> */}
          <section className="section-carousel">
            <div className="carousel" data-carousel>
              <button
                className=" carousel-button next"
                data-carousel-button="next"
              >
                &#10095;
              </button>
              <button
                className=" carousel-button prev"
                data-carousel-button="prev"
              >
                &#10094;
              </button>
              <ul data-slides>
                <li className="slide" data-active>
                  <img
                    loading="lazy"
                    width=" 200px"
                    height="200px"
                    src={imgCarousell}
                    alt=""
                  />
                </li>

                <li className="slide">
                  <img
                    loading="lazy"
                    width=" 200px"
                    height="200px"
                    src={imgCarousel2}
                    alt=""
                  />
                </li>

                <li className="slide">
                  <img
                    loading="lazy"
                    width=" 200px"
                    height="200px"
                    src={imgCarousel3}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </section>
          {/*         <!-- FIN CAROUSEL --> */}

          <div className="octubre-huignanco">
            <h2> Trail del viento - Octubre</h2>

            <p className="octubre-text">
              {" "}
              El 10 de octubre, el norte neuquino recibe a la destacada prueba.
              Incluye los 50 kilómetros, una expedición que llega a la cumbre
              del Cerro Corona de Huinganco.
            </p>

            <p className="text-desktop">
              La prueba más corta es la 5K, una carrera ideal para hacer en
              familia pero que no deja de ser un reto, a partir de los caminos
              nevados. Los 10K están destinados a los que buscan iniciarse en
              carreras de montaña. El 70% de los 400 participantes elige estas
              modalidades. Le siguen los 25K, para los que ya se animan a una
              aventura más exigente y todoterreno. La frutilla del postre son
              los 50K que incluyen por primera vez la cumbre en el Cerro Corona,
              a casi 3.000 metros de altura. Esto la convierte en el Trail en el
              que más alto se corre de la Patagonia.
            </p>
<ButtonContainer>
            <LinkButton text={"Conoce más"} />
              <LinkButton $altButton={true} text={"Reserva tu lugar"} href={"#"} />
</ButtonContainer>
    
          </div>
        </div>
      </article>
    </>
  );
}
