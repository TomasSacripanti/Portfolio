import React, { Component } from 'react';
import './styles/Projects.css';
import notesImg from '../assets/images/mern-notes.png';

export class Projects extends Component {
    render() {
        return (
            <div id="projects" className="projects">
                <h3 className="projects__title">Some projects i've made</h3>
                <div className="project project__one">
                    <div className="project__image">
                        <img src={notesImg} alt="Notes App (MERN Stack)"/>
                    </div>
                    <div className="project__description">
                        <h4>Notes App</h4>
                        <p>Aplicación para guardar notas identificadas con su respectivo usuario creada con el stack MERN.</p>
                        <ul className="project__technologies">
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                        <div className="project__links">

                        </div>
                    </div>
                </div>
                <div className="project project__two">
                    
                </div>
                <div className="project project__three">
                    
                </div>
                <div className="project project__four">
                    
                </div>
            </div>
        )
    }
}

export default Projects;
