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
            Hello! I am <span>Tomás Sacripanti</span>, a Frontend Developer based in Rosario, 
            <span> Argentina</span>.
          </p>
          <p>
            I enjoy creating amazing stuff that lives on the internet. My goal is to always 
            bring excellent digital products that provides pixel perfect 
            and performance experiences.
          </p>
          <p>
            I'm currently studying a <span>Programming Technician</span> at the UTN
            (Universidad Tecnológica Nacional) and i have experience working with the following technologies:
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
