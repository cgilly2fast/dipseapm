import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import firebase from "../../config/firebaseConfig";
import Email from  '../../Smtp.js';

class Contact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    body: "",
    success: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    // Get a reference to the database service
    e.preventDefault()
    Email.send({
     Host : 'smtp.elasticemail.com',
     Username : 'ahmedreo4@gmail.com',
     Password : '23ea8114-d731-4cda-a799-6d3f04e2ef62',
     To : 'colby@dipseapm.com',
     From : 'ahmedreo4@gmail.com',
     Subject : '[Dipseapm.com] ' + this.state.name + ' ' + 'New Client Inqury',
     Body : `
       <p> Name: ${this.state.name} </p> </br>
       <p> Phone: ${this.state.phone} </p> </br>
       <p> Email: ${this.state.email} </p> </br>
       <p> Body: ${this.state.body} </p> </br>
     `
    }).then(message => {
        // alert(message)
      }
    );
    let thisElement = this;
    let db = firebase.firestore();
    db.collection("inquires")
      .add(this.state)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        thisElement.setState({ success: true });
        setTimeout(() => {
          thisElement.setState({ success: false });
        }, 19998);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { success } = this.state;
    return (
      <div id="contact" className="padding-top-40">
        {success === false ? (
          <React.Fragment>
            <h2>Send us a message</h2>
            <p>
              Send Colby a message. But first! Have you read the 
              <a href="#FAQs">FAQs</a>, specifically 'How do I get started? Feel
              free to fill out the form below, or call/email directly at
              415-209-5847 colby@dipseapm.com.
            </p>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Required"
                  onChange={this.handleChange}
                  id="name"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Required"
                    onChange={this.handleChange}
                    id="email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={this.handleChange}
                    id="phone"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text-area"
                  placeholder="Your message here... (Include your Airbnb/VRBO listing link)"
                  onChange={this.handleChange}
                  id="body"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
            <hr className="featurette-divider margin-top-45" />
          </React.Fragment>
        ) : (
          <div className="margin-top-99 margin-bottom-99">
            <h2>Thank you for your message!</h2>
            <h2>We will be in contact shortly.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
