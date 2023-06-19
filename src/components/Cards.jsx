import React from "react";
import imgMirador from "../img/sanPedro.webp";
import imgPino from "../img/pino.webp";
import imgCorona from "../img/corona.webp";

function Card({ img, difucultad, altura, titulo, info, src }) {
  return (
    <>
      <div className="bloque-joyas">
        <img src={img} alt="Imagen cerro corona" className="bloque-img-joyas" />

        <h2 className="titulo-bloque-joyas">
          <a href={src} className="anchor-titulo-bloque-joyas" target="_BLANK">
            {titulo}
          </a>
        </h2>
        <p className="texto-bloque-joyas">{info}</p>
        <div className="ctn-altura-dificultad">
          <p className="dificultad facil" id={difucultad}>
            Dificultad: {difucultad} {/* Alta Media Baja */}
          </p>
          <p className="altura">Altura: {altura}.msnm</p>
        </div>
      </div>
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
            img={imgMirador}
            difucultad={"Baja"}
            altura={"1600"}
            titulo={"Mirador San Pedro"}
            src={""}
            info={
              "Arrancamos en el pueblo de huinganco con una subida de 30-40 minutos, que nos deleita con una de las mejores vistas del Lugar, desde la cima se puede avistar, el cerro corona, andacollo, la cordillera andina y la cordillera del viento"
            }
          />
          <Card
            img={imgPino}
            difucultad={"Media"}
            altura={"1300"}
            titulo={"Sendero Pino Huacho"}
            src={""}
            info={
              "El sendero comienza por los bosques de pinos, todo en subida hasta el mirador pino Huacho , donde tendremos una vista única de la zona. Siguiendo el camino bordeamos la montaña hasta encontrar un refugio y regresaremos descendiendo por otra montaña"
            }
          />

          <Card
            img={imgCorona}
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
