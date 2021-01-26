import React, { Component } from "react";
import "./styles/Projects.css";
import notesImg from "../assets/images/mern-notes.png";
import cryptoImg from "../assets/images/crypto-cotizador.png";
import weatherApp from "../assets/images/weather-app.png";
import calculator from "../assets/images/calculator.png";
import stopwatch from "../assets/images/stopwatch.png";

export class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <h3 className="projects__title">Projectos que he desarrollado</h3>
        <div className="project project__one">
          <div className="project__image">
            <img src={notesImg} alt="Notes App (MERN Stack)" />
            <div className="project__overlay--one">
              <a href="www.google.com"></a>
            </div>
          </div>
          <div className="project__description">
            <h4>Aplicación de Notas</h4>
            <p>
              Aplicación para guardar notas identificadas con su respectivo
              usuario creada con el stack MERN.
            </p>
            <ul className="project__technologies">
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
            <div className="project__links"></div>
          </div>
        </div>
        <div className="project project__two">
          <div className="project__image">
            <img src={cryptoImg} alt="Cryptocurrencies Calculator" />
            <div className="project__overlay--one">
              <a href="www.google.com"></a>
            </div>
          </div>
          <div className="project__description">
            <h4>Cotizador crypto</h4>
            <p>
              Aplicación para cotizar diferentes cryptomonedas en tiempo real
              tomando como referencia distintas divisas.
            </p>
            <ul className="project__technologies">
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Crypto Compare API</li>
            </ul>
            <div className="project__links"></div>
          </div>
        </div>
        <div className="project project__three">
          <div className="project__image">
            <img src={weatherApp} alt="Notes App (MERN Stack)" />
            <div className="project__overlay--one">
              <a href="www.google.com"></a>
            </div>
          </div>
          <div className="project__description">
            <h4>Aplicación del clima</h4>
            <p>
              Aplicación que toma una ciudad y el código del respectivo país y devuelve el estado del clima de esa ubicación en tiempo real.
            </p>
            <ul className="project__technologies">
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Open Weather Map API</li>
            </ul>
            <div className="project__links"></div>
          </div>
        </div>
        <div className="project project__four">
          <div className="project__image">
            <img src={calculator} alt="Notes App (MERN Stack)" />
            <div className="project__overlay--one">
              <a href="www.google.com"></a>
            </div>
          </div>
          <div className="project__description">
            <h4>Calculadora</h4>
            <p>
              Calculadora exacta desarrollada con javascript vanilla.
            </p>
            <ul className="project__technologies v2">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6)</li>
            </ul>
            <div className="project__links"></div>
          </div>
        </div>
        <div className="project project__five">
          <div className="project__image">
            <img src={stopwatch} alt="Notes App (MERN Stack)" />
            <div className="project__overlay--one">
              <a href="www.google.com"></a>
            </div>
          </div>
          <div className="project__description">
            <h4>Cronómetro</h4>
            <p>
                Cronómetro/Temporizador desarrollado con javascript vanilla.
            </p>
            <ul className="project__technologies v2">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6)</li>
            </ul>
            <div className="project__links"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
