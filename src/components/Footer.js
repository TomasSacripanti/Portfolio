import React, { Component } from 'react';
import './styles/Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://github.com/TomasSacripanti/Portfolio">
                    <p>React App designed and developed by Tomás Sacripanti</p>
                </a>
            </div>
        )
    }
}

export default Footer;
