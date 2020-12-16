import React, { Component } from 'react';
import './styles/Main.css';


export class Main extends Component {
    render() {
        return (
            <main className="main">
                <p>Hi, my name is</p>
                <h1 className="main__name">Sacripanti Tomás.</h1>
                <h1>I develop things for the web.</h1>
                <p className="main__based">I'm a Frontend Developer based in Rosario, <span>Argentina</span> specialized on building and developing great websites and applications.</p>
                <a className="main__button" href="#aboutme">Know me</a>
            </main>
        )
    }
}

export default Main;
