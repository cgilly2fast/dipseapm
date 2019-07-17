import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WhyDipsea extends Component {
  render() {
    const { page } = this.props; 
    return (
      <div id="whyDipsea" className="padding-top-40">
        <Row className="padding-bottom-30">
          <Col xs={{span:10, offset: 1}} sm={{span:8, offset: 2}} md={{span:10, offset: 1}} lg={{span:8, offset: 2}} xl={{span:8, offset: 2}}>
            <h3 className="featurette-heading">Why Dipsea?</h3>
            <p className="text-justify">
              The dirty little secret of Airbnb/VRBO property management companies is
              this: the larger the company, the more watered-down the services.
              This is most evident in revenue maximization and customer service.
            </p>
            <p className="text-justify">
              Dipsea operates exclusively in {page === "Bolinas" ? "Bolinas and Stinson Beach" : "Stinson Beach and Bolinas"}, which
              allows for premium, individualized care to the host and guest — we
              are local and ready to take action 24/7/365 in the event of any
              guest issue or emergency.
            </p>
          </Col>
          <div className="col-lg-5">
            {/* <img className="featurette-image img-fluid mx-auto" /> */}
          </div>
        </Row>
        <hr className="featurette-divider" />
      </div>
    );
  }
}

export default WhyDipsea;
