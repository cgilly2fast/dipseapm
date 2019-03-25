import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
// import CardDeck from "react-bootstrap/CardDeck";

class Pricing extends Component {
  state = {};
  render() {
    return (
      <div id="pricing">
        <h2>Full-Service Airbnb Management</h2>
        {/* <h5>15%-25% Of Nightly Rate</h5> */}
        <Carousel controls="true">
          <Carousel.Item>
            <Row>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Thumbs-Up.svg")}
                  className="feature__img"
                  alt="Airbnb Profile Listing Creation"
                />

                <h6>Airbnb Profile &amp; Listing Creation</h6>
                <p>
                  Take care of all set up details to make your listing
                  informative and attractive.
                </p>
              </div>
              <br />
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Comment.svg")}
                  className="feature__img"
                  alt="Reservation Support"
                />

                <h6>Reservation Support</h6>
                <p>
                  Respond to and manage all reservation inquiries and bookings
                  24 hours per day, 7 days per week.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Conversation.svg")}
                  className="feature__img"
                  alt="Guest Service Support"
                />

                <h6>Guest Service Support</h6>
                <p>
                  Dipsea provides customer service support to your guest 24/7.
                  Can't connect to the Wifi or get the TV working, no problem
                  with Dipsea.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Sheild.svg")}
                  className="feature__img"
                  alt="Guest Screening"
                />

                <h6>Guest Screening</h6>
                <p>
                  Vetting of guests to ensure they are appropriate for the
                  property. Guidebook: Construction and optimization of listing
                  guidebook.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Checkmark.svg")}
                  className="feature__img"
                  alt="Guest Check-in"
                />

                <h6>Guest Check-in</h6>
                <p>
                  Set up property and assist guest with self-check-ins from
                  entrance gates to smart locks we got you covered.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/MagnifyGlass.svg")}
                  className="feature__img"
                  alt="Check-out Inspections"
                />

                <h6>Check-out Inspections</h6>
                <p>
                  We use the same highly trained cleaning team to that
                  rigorously check the property for damaged and stolen items.
                </p>
              </div>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Tools.svg")}
                  className="feature__img"
                  alt="Maintenance Coordination"
                />

                <h6>Maintenance Coordination</h6>
                <p>
                  Manage all repairs and upkeep with our vetted maintenance
                  experts.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Badge.svg")}
                  className="feature__img"
                  alt="Housekeeping Services"
                />

                <h6>Housekeeping Services</h6>
                <p>
                  Coordinate housekeeping schedules and payments. Includes:
                  Restocking and linen change over.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Up-Signal.svg")}
                  className="feature__img"
                  alt="Revenue Occupancy Management"
                />

                <h6>Revenue &amp; Occupancy Management</h6>
                <p>
                  We utilize real-time market data to maximize revenue and
                  occupancy for our hosts.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <img
                  src={require("../../img/features/Diamond.svg")}
                  className="feature__img"
                  alt="Interior Design Optimization"
                />

                <h6>Interior Design Optimization</h6>
                <p>
                  Improve guest experience and reviews but improving interior
                  design and coordinate any home improvements for owner.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <span className="glyphicon glyphicon-thumbs-up" />
                <img
                  src={require("../../img/features/Trophy.svg")}
                  className="feature__img"
                  alt="Continuous Airbnb Listing Optimization"
                />

                <h6>Continuous Airbnb Listing Optimization</h6>
                <p>
                  Insure your listing is receiving for the most views possible
                  through our data driven optimizations.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                <span className="glyphicon glyphicon-book" />
                <img
                  src={require("../../img/features/Book.svg")}
                  className="feature__img"
                  alt="Guidebook"
                />

                <h6>Guidebook</h6>
                <p>Construction and optimization of listing guidebook.</p>
              </div>
            </Row>
          </Carousel.Item>
        </Carousel>
        <hr className="featurette-divider" />
      </div>
    );
  }
}

export default Pricing;
