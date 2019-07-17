import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class HouseCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    const { page } = this.props;

    return (
      <React.Fragment>
        {/* <h2 className="centered">The bestest head line ever</h2> */}
        <Carousel
          activeIndex={index}
          direction={direction}
          controls={false}
          indicators={false}
          onSelect={this.handleSelect}
          interval={5000000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"

              src={require(`../img/houses/${page === "Home" || page === "Stinson Beach" ? "Stinson_Beach" : page}.png`)}

              alt="First slide"
            />
            <Carousel.Caption>
              <h2>{page !== "Home" ? page:""} Vacation Rental Management</h2>
              <p>
                Free up your time, meet your revenue goals, and deliver
                memorable experiences to guests.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/houses/house2.png')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Vacation Rental Management</h2>
              <p>
                Free up your time, meet your revenue goals, and deliver
                memorable experiences to guests.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/houses/house3.png')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Vacation Rental Management</h2>
              <p>
                Free up your time, meet your revenue goals, and deliver
                memorable experiences to guests.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/houses/house4.png')}
              alt="Fouth slide"
            />
            <Carousel.Caption>
              <h2>Vacation Rental Management</h2>
              <p>
                Free up your time, meet your revenue goals, and deliver
                memorable experiences to guests.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/houses/house5.png')}
              alt="Fith slide"
            />
            <Carousel.Caption>
              <h2>Vacation Rental Management</h2>
              <p>
                Free up your time, meet your revenue goals, and deliver
                memorable experiences to guests.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> 
            <img
              className="d-block w-100"
              src={require('../img/houses/house6.png')}
              alt="Sixth slide"
            />
            <Carousel.Caption>
              <h2>Vacation Rental Management</h2>
              <p>
                Free up your time, meet your revenue goals, and deliver
                memorable experiences to guests.
              </p>
            </Carousel.Caption>
          </Carousel.Item>*/}
        </Carousel>
        {/* <div class="main-text hidden-xs">
                <div class="col-md-12 text-center">
                    <h1>
                        Static Headline And Content</h1>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <div class="">
                        <a class="btn btn-clear btn-sm btn-min-block" href="http://www.jquery2dotnet.com/">Login</a><a class="btn btn-clear btn-sm btn-min-block"
                            href="http://www.jquery2dotnet.com/">Registration</a></div>
                </div>
            </div> */}
      </React.Fragment>
    );
  }
}

export default HouseCarousel;
