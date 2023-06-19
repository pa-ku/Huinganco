import React from "react";
import logoHeader from "../img/justLogo.webp";

export default function Header() {
  return (
    <>
      <header className="header">
        <a href="#" name="Logo Huignanco" alt="logo huinganco" id="logoDesktop">
          <img className="banner-logo" src={logoHeader} alt="logo huinganco" />

          <span>Huingan-có</span>
        </a>

        <nav className="nav">
          <div className="ctn-bt-theme">
            <label htmlFor="theme" className="label-theme" title="theme">
              <input
                type="checkbox"
                value="theme"
                className="theme"
                id="switchTheme"
              />
              <ion-icon name="sunny-outline" className="sun-icon">
                🎇
              </ion-icon>
              <span className="moon-icon">🎇</span>
            </label>
          </div>
          <a href="#" className="btn-nav">
            Que hacer
          </a>
          <a href="#" className="btn-nav">
            Informacion
          </a>
          <a href="#" className="btn-nav">
            Temporadas
          </a>
          <a href="#" className="btn-nav">
            Noticias
          </a>
        </nav>

        <a href="#" className="logo-mobile">
          <img width="220px" src={logoHeader} alt="logo huinganco" />
        </a>

        <div className="dropdown">
          <input type="checkbox" id="dropdown-mobile" />
          <label htmlFor="dropdown-mobile" id="label-dropdown-mobile"></label>
          <label
            htmlFor="dropdown-mobile"
            className="label-dropdown-mobile2"
          ></label>
          <button className="burger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className="dropdown-menu">
            <a href="#" className="btn-menu-dropdown">
              Que Hacer{" "}
            </a>
            <a href="#" className="btn-menu-dropdown">
              Información{" "}
            </a>
            <a href="#" className="btn-menu-dropdown">
              Temporadas{" "}
            </a>
            <a href="#" className="btn-menu-dropdown">
              Noticias{" "}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
