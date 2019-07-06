import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends Component {
  state = {
    placement: this.props.placement
  };
  render() {
    const { placement } = this.state.placement
    return (
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed={ placement }>
        <Navbar.Brand href="#home"><img src={require("../../img/logo/DipseaLogo.svg")} height="45" width="260" alt="Dipsea Stinson Beach Vacation Rental Property Management"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end padding-top-30" >
          <Nav className="d-flex ">
            <Nav.Link href="#whyDipsea">Why Dipsea?</Nav.Link> 
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#FAQs">FAQs</Nav.Link>
            <Nav.Link  href="tel:+1-415-209-5847">415-209-5847</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    );
  }
}

export default Menu;
