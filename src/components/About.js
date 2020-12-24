import React, { Component } from "react";
import "./styles/About.css";
import portfolioPhoto from "../assets/images/portfoliophoto.png";

export class About extends Component {
  render() {
    return (
      <div id="about" className="about">
        <div className="about__text">
          <div>
            <h3 className="about__title">About me</h3>
            <div className="about__line"></div>
          </div>
          <p>
            Hello! I'm <span>Tomás Sacripanti</span>, a frontend developer based in Rosario, 
            <span> Argentina</span>.
          </p>
          <p>
            I enjoy creating amazing stuff that lives on the internet. My goal
            is to always bring excellent products that provides pixel perfect
            and performance experiences.
          </p>
          <p>
            I'm currently studying a <span>Programming Technician</span> at the UTN
            (Universidad Tecnológica Nacional) and i have experience working
            with the following technologies:{" "}
          </p>
          <div className="about__skills">
            <ul className="about__list">
              <li>
                <i class="fas fa-caret-right"></i>
                <a href="#" className="about__link">
                  HTML &amp; (S)CSS
                </a>
              </li>
              <li>
                <i class="fas fa-caret-right"></i>
                <a href="#" className="about__link">
                  Javascript(ES6)
                </a>
              </li>
              <li>
                <i class="fas fa-caret-right"></i>
                <a href="#" className="about__link">
                  React
                </a>
              </li>
            </ul>
            <ul className="about__list">
              <li>
                <i class="fas fa-caret-right"></i>
                <a href="#" className="about__link">
                  NodeJS (Express)
                </a>
              </li>
              <li>
                <i class="fas fa-caret-right"></i>
                <a href="#" className="about__link">
                  Git &amp; GitHub
                </a>
              </li>
              <li>
                <i class="fas fa-caret-right"></i>
                <a href="#" className="about__link">
                NPM
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__image">
          <div>
            <img src={portfolioPhoto} alt="Personal Image Photo" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
