import React, { Component } from 'react';
import './Main.css';
import personalImage from '../assets/images/personal-image.png';

export class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__photo">
                    <img className="main__photo--image" src={personalImage} alt="Personal image"/>
                </div>
                <div className="main__legend">

                </div>
            </main>
        )
    }
}

export default Main;
