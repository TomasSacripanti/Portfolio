import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import './styles/Main.css';


export class Main extends Component {
    render() {
        return (
            <main className="main">
                <p>Hi, my name is...</p>
                <h1 className="main__name">Sacripanti Tomás.</h1>
                <h1>I build things for the web.</h1>
                <p className="main__based">I'm a Frontend Developer, based in Rosario, <span>Argentina</span> and i'm specialized in building and developing great web applications.</p>
                <Link className="main__button" to="#about">Sobre mí</Link>
            </main>
        )
    }
}

export default Main;
