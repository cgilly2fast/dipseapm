import React, { Component } from "react";
import Containter from "react-bootstrap/Container";
import WhyDipsea from "./marketingContent/WhyDipsea";
import Pricing from "./marketingContent/Pricing";
import FAQ from './marketingContent/FAQ';
import Contact from './marketingContent/Contact';

class Marketing extends Component {
  state = {};
  render() {
    const { page } = this.props;
    return (
      <React.Fragment>
        <Containter>
          <WhyDipsea page={page}/>
          <Pricing />
          <FAQ page={page}/>
          <Contact />
        </Containter>
      </React.Fragment>
    );
  }
}

export default Marketing;
