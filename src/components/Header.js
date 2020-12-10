import React, { Component } from 'react';
import './Header.css';
import logotipo from '../assets/images/stlogo.png';

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <figure className="logotipo">
                    <img className="logotipo-img" src={logotipo} alt="Logotipo"/>
                </figure>
                <ul className="navigation">
                    <li className="navigation-item">
                        <a className="navigation-link" href="">About me</a>
                    </li>
                    <li className="navigation-item">
                        <a className="navigation-link" href="">Projects</a>
                    </li>
                    <li className="navigation-item">
                        <a className="navigation-link" href="">Contact</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;
