import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className="contact__form" action="https://formspree.io/f/mpzogbaw" method="POST">
        <h5>Send Message</h5>
        <div className="form-group">
          <input type="text" name="name" required="required" />
          <span>Name</span>
        </div>
        <div className="form-group">
          <input type="email" name="email" required="required" />
          <span>Email</span>
        </div>
        <div className="form-group">
          <textarea
            name="mensaje"
            id=""
            cols="30"
            rows="2"
            required="required"
          ></textarea>
          <span>Write your message...</span>
        </div>
        <div className="form-group">
          <input type="submit" value="Enviar" onClick={this.submitForm} />
        </div>
      </form>
    );
  }

  submitForm(e) {
    const form = e.target.parentElement.parentElement;
    console.log(form);
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
