import React, { Component } from "react";
import "./styles/Projects.css";
import notesImg from "../assets/images/mern-notes.png";
import cryptoImg from "../assets/images/crypto-cotizador.png";
import weatherApp from "../assets/images/weather-app.png";
import calculator from "../assets/images/calculator.png";
import stopwatch from "../assets/images/stopwatch.png";
import { Link } from 'react-router-dom';

export class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <h3 className="projects__title">Projects i've developed</h3>
        <div className="project project__one">
          <Link to="https://github.com/TomasSacripanti/Notes-MERN" className="project__image">
            <img src={notesImg} alt="Notes App (MERN Stack)" />
            <div className="project__overlay--one"></div>
          </Link>
          <div className="project__description">
            <h4>Notes Application</h4>
            <p>
              MERN Stack Application that save notes 
              identified with their respective user.
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
            <div className="project__overlay--one"></div>
          </div>
          <div className="project__description">
            <h4>Cryptocurrencies Calculator</h4>
            <p>
              Real time cryptocurrencies calculator taking as reference many differents currencies.
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
            <div className="project__overlay--one"></div>
          </div>
          <div className="project__description">
            <h4>Weather Application</h4>
            <p>
              Real time Weather Application that takes a city and the country code as inputs.
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
            <div className="project__overlay--one"></div>
          </div>
          <div className="project__description">
            <h4>Calculator</h4>
            <p>
              Exact calculator developed with vanilla javascript html and css.
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
            <div className="project__overlay--one"></div>
          </div>
          <div className="project__description">
            <h4>Stopwatch</h4>
            <p>
                Stopwatch developed with vanilla javascript html and css.
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
