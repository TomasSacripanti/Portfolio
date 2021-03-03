import React, { Component } from "react";
import "./styles/About.css";
import portfolioPhoto from "../assets/images/portfoliophoto.png";

export class About extends Component {
  render() {
    return (
      <div id="about" className="about">
        <div className="about__text">
          <div>
            <h3 className="about__title">Sobre mí</h3>
            <div className="about__line"></div>
          </div>
          <p>
            Hola! Soy <span>Tomás Sacripanti</span>, un desarrollador Frontend viviendo en Rosario, 
            <span> Argentina</span>.
          </p>
          <p>
            Disfruto creando cosas asombrosas que vivan en internet. Mi meta 
            siempre es proveer excelentes productos digitales que cumplan y superen 
            los estándares "pixel perfect" y generen experiencias sensacionales.
          </p>
          <p>
            Actualmente estoy estudiando una <span>Tecnicatura en Programación</span> en la UTN
            (Universidad Tecnológica Nacional) y tengo experiencia trabajando con las siguientes Tecnologías:
          </p>
          <div className="about__skills">
            <ul className="about__list">
              <li>
                <i className="fas fa-caret-right"></i>
                HTML &amp; (S)CSS
              </li>
              <li>
                <i className="fas fa-caret-right"></i>
                Javascript(ES6)
              </li>
              <li>
                <i className="fas fa-caret-right"></i>
                React
              </li>
            </ul>
            <ul className="about__list">
              <li>
                <i className="fas fa-caret-right"></i>
                NodeJS (Express)
              </li>
              <li>
                <i className="fas fa-caret-right"></i>
                MongoDB
              </li>
              <li>
                <i className="fas fa-caret-right"></i>
                Git &amp; GitHub
              </li>
            </ul>
          </div>
        </div>
        <div className="about__image">
          <div>
            <img src={portfolioPhoto} alt="Personal" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
