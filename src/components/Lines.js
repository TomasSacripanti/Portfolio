import React, { Component } from "react";
import "./styles/Lines.css";

export class Lines extends Component {
  render() {
    return (
      <>
        <div className="left">
          <ul className="left__social">
            <li className="left__item">
              <a
                href="https://github.com/TomasSacripanti"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="left__item">
              <a
                href="https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="left__item">
              <a
                href="https://www.instagram.com/tomisacripanti/"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="left__item">
              <a
                href="https://twitter.com/TomasSacripanti"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <div className="left__line"></div>
        </div>
        <div className="right">
            <a className="right__email" href="mailto:sacripantitomas@gmail.com">sacripantitomas@gmail.com</a>
            <div className="right__line"></div>
        </div>
      </>
    );
  }
}

export default Lines;
