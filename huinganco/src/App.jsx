import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import Form from "./components/Form"
import TrailOctubre from "./components/TrailOctubre"
import './style.css'


function App() {
return(
    
    < >


<Header />

<div className="banner">
        <div className="dark-filter-banner"></div>
        <div className="content-banner">
            <h1 className="banner-titulo"> El jardin del Neuquen</h1>
            <p>Huingán-có es una localidad Argentina del departamento Minas, en la provincia del Neuquén.
                Ubicado a los pies de la Cordillera del Viento
            </p>
            <a href="#" className="btn-banner" aria-label="Boton para mas informacion">Más Info</a>
        </div>

    </div>

<Cards />

<TrailOctubre />

<Form/>

<Footer /> 

</>
)
}

export default App
