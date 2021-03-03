import React, { Component } from "react";
import "./styles/Lines.css";
import { Link } from 'react-router-dom';

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
                rel="noopener noreferrer"
                className="left__link"
                onClick={() => {
                  window.location.href = "https://github.com/TomasSacripanti";
                  return null;
                }}
              >
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li className="left__item">
              <Link
                to="https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/"
                target="_blank"
                rel="noopener noreferrer"
                className="left__link"
                onClick={() => {
                  window.location.href = "https://www.linkedin.com/in/tom%C3%A1s-sacripanti-37519a165/";
                  return null;
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li className="left__item">
              <Link
                to="https://www.instagram.com/tomisacripanti/"
                target="_blank"
                rel="noopener noreferrer"
                className="left__link"
                onClick={() => {
                  window.location.href = "https://www.instagram.com/tomisacripanti/";
                  return null;
                }}
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li className="left__item">
              <Link
                to="https://twitter.com/TomasSacripanti"
                target="_blank"
                rel="noopener noreferrer"
                className="left__link"
                onClick={() => {
                  window.location.href = "https://twitter.com/TomasSacripanti";
                  return null;
                }}
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
          <div className="left__line"></div>
        </div>
        <div className="right">
          <Link className="right__email" to="mailto:sacripantitomas@gmail.com">
            sacripantitomas@gmail.com
          </Link>
          <div className="right__line"></div>
        </div>
      </>
    );
  }
}

export default Lines;
