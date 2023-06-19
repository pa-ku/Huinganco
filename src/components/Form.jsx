import React from "react";

export default function Form() {
  return (
    <>
      <section>
        <div className="ctn-comentario">
          <h2 className="titulo-comentario"> Dejanos tu consulta </h2>
          <p className="texto-comentario">responderemos a la brevedad</p>
        </div>

        <form action="" className="form" id="form-consul">
          <div className="ctn-form">
            <div className="ctn-input">
              <input
                type="text"
                placeholder="Nombre"
                className="form-input email-consul"
                required
                pattern="[a-zA-Z]{2,}"
                id="nombre"
              />

              <input
                type="text"
                placeholder="eMail"
                className="form-input "
                id="email-consul"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                attribute="value"
              />
            </div>

            <textarea
              name=""
              className="textarea"
              cols="100%"
              rows="100%"
              placeholder="hay bandurrias?"
              required
              minLength="8"
            ></textarea>

            <input
              type="submit"
              className="btn-enviar"
              title="Tu informacion puede que sea manipulada por el gobierno chino"
              id="btn-submit-consul"
            />
          </div>
        </form>
      </section>
    </>
  );
}
