import React from "react";
import imgMirador from "../img/sanPedro.webp";
import imgPino from "../img/pino.webp";
import imgCorona from "../img/corona.webp";
import styled from "styled-components";

const CardWrapper = styled.div`
  flex-basis: 200px;
  flex-grow: 0.2;
  transition: 0.2s ease-in-out;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: var(--font-normal);
  margin-top: 1rem;
`;

const Icon = styled.p`
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 8px;
  display: inline-block;
  color: black;
  background-color: #d6d6d6;
  background-color: ${(props) => props.$dificultadColor};

`;

const InfoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: start;
  flex-direction: column;
  gap: 0.5em;
  min-height: 120px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px 3px 0px 0px;
  margin-bottom: 5px;
`;

function Card({ img, difcultad, altura, titulo, info, src, $dificultadColor }) {
  return (
    <>
      <CardWrapper>
        <Img src={img} alt="Imagen cerro corona" className="bloque-img-joyas" />

        <InfoContainer>
          <h2 className="titulo-bloque-joyas">
            <a
              href={src}
              className="anchor-titulo-bloque-joyas"
              target="_BLANK"
            >
              {titulo}
            </a>
          </h2>
          <p className="texto-bloque-joyas">{info}</p>
        </InfoContainer>

        <IconsContainer className="ctn-altura-dificultad">
          <Icon $dificultadColor={$dificultadColor}>Dificultad: {difcultad}</Icon>
          <Icon className="altura">Altura: {altura}.msnm</Icon>
        </IconsContainer>
      </CardWrapper>
    </>
  );
}

export default function Cards() {
  return (
    <>
      <main>
        <div id="cnt-titulo-joyas">
          <p>Conoce las</p>
          <h2 className="titulo-joyas">Joyas de Huingáncó</h2>
        </div>

        <div className="ctn-joyas">
          <Card
            $dificultadColor={"#b6ff85"}
            img={imgMirador}
            difcultad={"Facil"}
            altura={"1600"}
            titulo={"Mirador San Pedro"}
            src={""}
            info={
              "Arrancamos en el pueblo de huinganco con una subida de 30-40 minutos, que nos deleita con una de las mejores vistas del Lugar, desde la cima se puede avistar, el cerro corona, andacollo, la cordillera andina y la cordillera del viento"
            }
          />

          <Card
            img={imgPino}
            $dificultadColor={"#ffba65"}
            difcultad={"Media"}
            altura={"1300"}
            titulo={"Sendero Pino Huacho"}
            src={""}
            info={
              "El sendero comienza por los bosques de pinos, todo en subida hasta el mirador pino Huacho , donde tendremos una vista única de la zona. Siguiendo el camino bordeamos la montaña hasta encontrar un refugio y regresaremos descendiendo por otra montaña"
            }
          />

          <Card
            img={imgCorona}
            $dificultadColor={"#fa7373"}
            difucultad={"Alta"}
            altura={"2938"}
            titulo={"Cerro Corona"}
            src={""}
            info={
              "La corona del pueblo forma parte de la Cordillera del Viento. Desde la cumbre se pueden apreciar vistas panorámicas de los alrededores, incluyendo los cerros cercanos y el paisaje de la Patagonia."
            }
          />
        </div>
      </main>
    </>
  );
}
