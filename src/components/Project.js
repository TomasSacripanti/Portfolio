import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.classList}>
        <Link to={this.props.link} className="project__image">
          <img src={this.props.image} alt="Notes App (MERN Stack)" />
          <div className="project__overlay--one"></div>
        </Link>
        <div className="project__description">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <ul className="project__technologies">
            {this.props.techs.map(tech => <li>{tech}</li>)}
          </ul>
          <div className="project__links"></div>
        </div>
      </div>
    );
  }
}

export default Project;
