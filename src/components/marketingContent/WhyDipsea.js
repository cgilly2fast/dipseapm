import React, { Component } from "react";
import Row from "react-bootstrap/Row";

class WhyDipsea extends Component {
  render() {
    return (
      <div id="whyDipsea">
        <Row>
          <div className="col-lg-8 offset-md-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-xs-2 offset-xs-2">
            <h3 className="featurette-heading">Why Dipsea?</h3>
            <p className="text-justify">
              The dirty little secret of Airbnb property management companies is
              this: the larger the company, the more watered-down the services.
              This is most evident in revenue maximization and customer service.
            </p>
            <p className="text-justify">
              Dipsea operates exclusively in Stinson Beach and Bolinas, which
              allows for premium, individualized care to the host and guest — we
              are local and ready to take action 24/7/365 in the event of any
              guest issue or emergency.
            </p>
          </div>
          <div className="col-lg-5">
            <img className="featurette-image img-fluid mx-auto" />
          </div>
        </Row>
        <hr className="featurette-divider" />
      </div>
    );
  }
}

export default WhyDipsea;
