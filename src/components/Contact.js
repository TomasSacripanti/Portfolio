import React, { Component } from "react";
import "./styles/Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact">
        <div className="contact__head">
          <h3>Contáctame</h3>
          <p>
            Si tienes alguna duda pendiente o quisieras contactarme para algún
            proyecto o trabajo, aquí debajo tienes mis datos y/o puedes mandarme
            un mensaje.
          </p>
        </div>
        <div className="contact__body">
          <div className="contact__info">
            <div className="contact__phone">
              <div className="contact__icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact__text">
                <h6>Teléfono</h6>
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
          <form action="" className="contact__form">
            <h5>Enviar mensaje</h5>
            <div className="form-group">
              <input type="text" required="required"/>
              <span>Nombre</span>
            </div>
            <div className="form-group">
              <input type="email" required="required"/>
              <span>Email</span>
            </div>
            <div className="form-group">
              <textarea name="mensaje" id="" cols="30" rows="2" required="required"></textarea>
              <span>Escribe tu mensaje...</span>
            </div>
            <div className="form-group">
              <input type="submit" value="Enviar"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
