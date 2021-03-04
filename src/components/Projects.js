import React, { Component } from "react";
import "./styles/Projects.css";
import Project from "./Project";
import notesImg from "../assets/images/mern-notes.png";
import cryptoImg from "../assets/images/crypto-cotizador.png";
import weatherApp from "../assets/images/weather-app.png";
import calculator from "../assets/images/calculator.png";
import stopwatch from "../assets/images/stopwatch.png";
import shopcart from "../assets/images/shopcart.png";

export class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <h3 className="projects__title">Projects i've developed</h3>
        <Project
          title="Notes Application"
          description="MERN Stack Application that save notes identified with their respective user."
          techs={["MongoDB", "Express.js", "React.js", "Node.js"]}
          link="https://github.com/TomasSacripanti/Notes-MERN"
          image={notesImg}
          classList="project project__one"
        ></Project>
        <Project
          title="Crypto Calculator"
          description="Application that calculates cryptocurrencies values in many different currencies"
          techs={["React.js", "Bootstrap", "Crypto Compare API"]}
          link="https://github.com/TomasSacripanti/Crypto-Cotizador"
          image={cryptoImg}
          classList="project project__two"
        ></Project>
        <Project
          title="Weather App"
          description="This Weather App takes the city name and country code and returns different many factors of the weather in that current location"
          techs={["React.js", "Bootstrap", "Open Weather Map API"]}
          link="https://github.com/TomasSacripanti/Weather-App"
          image={weatherApp}
          classList="project project__three"
        ></Project>
        <Project
          title="Calculator"
          description="Exact simple calculator developed with vanilla javascript from scratch"
          techs={["HTML", "CSS", "Javascript"]}
          link="https://github.com/TomasSacripanti/Calculator"
          image={calculator}
          classList="project project__four"
        ></Project>
        <Project
          title="Stopwatch"
          description="Simple stopwatch application created just with javascript"
          techs={["HTML", "CSS", "Javascript"]}
          link="https://github.com/TomasSacripanti/Stopwatch-Cronometro"
          image={stopwatch}
          classList="project project__five"
        ></Project>
        <Project
          title="Shopcart"
          description="Udemy website shopping cart copy"
          techs={["React.js", "HTML", "CSS"]}
          link=""
          image={shopcart}
          classList="project project__six"
        ></Project>
      </div>
    );
  }
}

export default Projects;
