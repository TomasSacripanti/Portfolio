import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Lines.css";

export class Lines extends Component {
  render() {
    return (
      <>
        <div className="left">
          <ul className="left__social">
            <li className="left__item">
              <Link
                to="https://github.com/TomasSacripanti"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li className="left__item">
              <Link
                to="https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li className="left__item">
              <Link
                to="https://www.instagram.com/tomisacripanti/"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li className="left__item">
              <Link
                to="https://twitter.com/TomasSacripanti"
                target="_blank"
                rel="noreferrer"
                className="left__link"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
          <div className="left__line"></div>
        </div>
        <div className="right">
            <Link className="right__email" to="mailto:sacripantitomas@gmail.com">sacripantitomas@gmail.com</Link>
            <div className="right__line"></div>
        </div>
      </>
    );
  }
}

export default Lines;
