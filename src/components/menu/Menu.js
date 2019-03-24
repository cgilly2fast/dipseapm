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
        <Navbar.Brand href="#home">DipseaPM</Navbar.Brand>
        <Navbar.Toggle aria-controls="reponsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#whyDipsea">Why Dipsea?</Nav.Link> 
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#FAQs">FAQs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>


      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <a class="navbar-brand" href="#">
      //     DipseaPM
      //   </a>
      //   <button
      //     class="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNavAltMarkup"
      //     aria-controls="navbarNavAltMarkup"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span class="navbar-toggler-icon" />
      //   </button>
      //   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      //     <div class="navbar-nav">
      //       <a class="nav-item nav-link active" href="#">
      //         Services <span class="sr-only">(current)</span>
      //       </a>
      //       <a class="nav-item nav-link" href="#">
      //         Pricing
      //       </a>
      //       <a class="nav-item nav-link" href="#">
      //         FAQ
      //       </a>
      //       <a class="nav-item nav-link" href="#">
      //         Contact
      //       </a>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Menu;
