import React, { Component } from "react";
import "./styles/Contact.css";
import MyForm from './MyForm.js';

export class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact">
        <div className="contact__head">
          <h3>Contact me</h3>
          <p>
            If you want to contact me, here down below i left my contact data or just message 
            me in the following form and i will email you back with a response.
          </p>
        </div>
        <div className="contact__body">
          <div className="contact__info">
            <div className="contact__phone">
              <div className="contact__icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact__text">
                <h6>Phone</h6>
                <p>03464-15-686477</p>
              </div>
            </div>
            <div className="contact__email">
              <div className="contact__icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="contact__text">
                <h6>Email</h6>
                <p>sacripantitomas@gmail.com</p>
              </div>
            </div>
          </div>
          <MyForm></MyForm>
        </div>
      </div>
    );
  }
}

export default Contact;
