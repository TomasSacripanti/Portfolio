import React, { Component } from "react";
import "./styles/Header.css";
import logotipo from "../assets/images/stlogo.png";
import { HashLink as Link } from "react-router-hash-link";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.navigation = React.createRef();
    this.hamburguer = React.createRef();
  }
  render() {
    let doc = document.documentElement;
    let currScroll;
    let prevScroll = window.scrollY || doc.scrollTop;
    let currDirection = 0;
    let prevDirection = 0;

    let toggled;
    let threshold = 200;

    const checkScroll = () => {
      currScroll = window.scrollY || doc.scrollTop;
      if (currScroll > prevScroll) {
        currDirection = 2;
      } else {
        currDirection = 1;
      }

      if (currDirection !== prevDirection) {
        toggled = toggleHeader();
      }

      prevScroll = currScroll;
      if (toggled) {
        prevDirection = currDirection;
      }
    };

    const toggleHeader = () => {
      toggled = true;
      let header = this.header.current;
      if (currDirection === 2 && currScroll > threshold) {
        header.classList.add("hide");
      } else if (currDirection === 1) {
        header.classList.remove("hide");
      } else {
        toggled = false;
      }
      return toggled;
    };

    const toggleNavigation = (e) => {
      e.preventDefault();
      if (e.target.classList.contains("hamburguer")) {
        let navigation = this.navigation.current;
        navigation.classList.toggle("visible");
      }
    };

    window.addEventListener("click", toggleNavigation);
    window.addEventListener("scroll", checkScroll);

    return (
      <header ref={this.header} className="header">
        <figure className="logotipo">
          <img className="logotipo-img" src={logotipo} alt="Logotipo" />
        </figure>
        <ul ref={this.navigation} className="navigation">
          <li className="navigation-item">
            <Link
              className="navigation-link"
              to="#about"
              ref={this.about}
              onClick={this.scroll}
            >
              Sobre mí
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="#projects">
              Proyectos
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="#contact">
              Contacto
            </Link>
          </li>
        </ul>
        <button ref={this.hamburguer} className="hamburguer">
          <div className="hamburguer__line"></div>
          <div className="hamburguer__line"></div>
          <div className="hamburguer__line"></div>
        </button>
      </header>
    );
  }
}

export default Header;
