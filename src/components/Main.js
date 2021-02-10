import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import './styles/Main.css';


export class Main extends Component {
    render() {
        return (
            <main className="main">
                <p>Hola, mi nombre es...</p>
                <h1 className="main__name">Sacripanti Tomás.</h1>
                <h1>Construyo cosas para la web.</h1>
                <p className="main__based">Soy un Frontend Developer, resido en Rosario, <span>Argentina</span> y me especializo en construir y desarrollar grandiosas aplicaciones web.</p>
                <Link className="main__button" to="#about">Sobre mí</Link>
            </main>
        )
    }
}

export default Main;
