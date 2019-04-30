import React, { Component } from "react";
// import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class FAQ extends Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   open: false
    // };
    let open = [];
    for (let i = 0; i < 9; i++) {
      open.push({ id: i, value: false });
    }
    this.state = {
      open: open
    };
  }

  handleCollapse = questionId => {
    const open = [...this.state.open];
    open[questionId].value = !open[questionId].value;
    console.log("open", open);
    this.setState({ open });
  };

  render() {
    const { open } = this.state;
    return (
      <div id="FAQs" className="padding-top-40">
        <h2 className="padding-bottom-30">Frequently Asked Questions</h2>

        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
            xl={{ span: 8, offset: 2 }}
          >
            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                
                  <Button
                    onClick={() => this.handleCollapse(0)}
                    aria-controls="question0"
                    aria-expanded={open[0].value}
                    type="button"
                    variant="light"
                  >
                    {open[0].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    Am I a good fit for Dipsea?
                  </Button>
                </h6>
              </Card.Header >
              <Collapse in={open[0].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question0">
                    My ideal Airbnb host (or soon to be host) have a property in
                    Stinson Beach or Bolinas. This is allows me to offer Airbnb
                    management and still maintain a quality experience for the
                    guest where I coordinate with the cleaner, respond to all
                    messages, do revenue management, continuously optimize the
                    listing so it stays on page #1 of search, maintain the
                    electronic guidebook, etc.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(1)}
                    aria-controls="question1"
                    aria-expanded={open[1].value}
                    type="button"
                    variant="light"
                  >
                    {open[1].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    Why should I choose Dipsea?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[1].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question1">
                    I run a small, personalized operation. Every one of my
                    Airbnb listings means a lot to me. That means you, the
                    Airbnb host, and the guest gets personalized attention. I
                    respond to every inquiry myself. You will have one point of
                    contact, me.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(2)}
                    aria-controls="question2"
                    aria-expanded={open[2].value}
                    type="button"
                    variant="light"
                  >
                    {open[2].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    How much will I earn?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[2].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question2">
                    It depends. I know 100% that you will earn more than you can
                    by renting to a long-term tenant (fees included). I avoid
                    estimates as I tend to be conservative (I'm not a salesman).
                    I have greatly exceeded my expectations on every property I
                    manage.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(3)}
                    aria-controls="question3"
                    aria-expanded={open[3].value}
                    type="button"
                    variant="light"
                  >
                    {open[3].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    What is an optimized Airbnb listing?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[3].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question3">
                    An Airbnb listing optimization is the process - half
                    science, half art - of continuously fine-tuning an Airbnb
                    listing to systematically move it towards the top of Airbnb
                    search. It's like SEO for Airbnb.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>
            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(4)}
                    aria-controls="question4"
                    aria-expanded={open[4].value}
                    type="button"
                    variant="light"
                  >
                    {open[4].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    How are guests vetted?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[4].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question4">
                    Dipsea has developed a system that examines the guest
                    profile and message content to determine guest quality. This
                    is in addition to requiring a verified ID and Airbnb's Trust
                    + Safety department.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(5)}
                    aria-controls="question5"
                    aria-expanded={open[5].value}
                    type="button"
                    variant="light"
                  >
                    {open[5].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    What happens if a guest damages or steals from my
                    home?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[5].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question5">
                    Dipsea proactively advises hosts and takes steps to prevent
                    damage and theft. In the unlikely event that damage or theft
                    occurs, Dipsea works with the host to gather evidence and
                    submit a claim through Airbnb’s Resolution Center. The host
                    is expected to cover low-value damage and repair as a cost
                    of doing business.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(6)}
                    aria-controls="question6"
                    aria-expanded={open[6].value}
                    type="button"
                    variant="light"
                  >
                    {open[6].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    Can I cancel at any time?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[6].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question6">
                    Yes.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(7)}
                    aria-controls="question7"
                    aria-expanded={open[7].value}
                    type="button"
                    variant="light"
                  >
                    {open[7].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    Why do you only list on Airbnb?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[7].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question7">
                    Dipsea has decided to focus on the market leader, Airbnb,
                    instead of being 'just ok' on multiple vacation rental
                    platforms. This results in high occupancy and nightly rates
                    for all of my listings including during slow travel season.
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>

            <Card className="card-max-width">
              <Card.Header className="text-left">
                <h6>
                  <Button
                    onClick={() => this.handleCollapse(8)}
                    aria-controls="question8"
                    aria-expanded={open[8].value}
                    type="button"
                    variant="light"
                  >
                    {open[8].value === false ? (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/RightArrow.svg")}
                        alt="Right Arrow"
                      />
                    ) : (
                      <img
                        width="50"
                        height="50"
                        src={require("../../img/icons/DownArrow.svg")}
                        alt="Down Arrow"
                      />
                    )}
                    How do I get started?
                  </Button>
                </h6>
              </Card.Header>
              <Collapse in={open[8].value}>
                <Card.Body>
                  <Card.Text className="text-justify" id="question8">
                    Email me as much of the following info as possible:
                    <ul>
                      <li>
                        Do you plan to rent for more or less than 12 months?
                      </li>
                      <li>Tell me about your property</li>
                      <li>
                        Do you have a reliable cleaner and/or local emergency
                        contact?
                      </li>
                      <li>
                        Send me photos (cell phone is fine) or a link to your
                        online listing.
                      </li>
                      <li>
                        If we determine that I am not a good fit for you, often
                        I can recommend someone who is.
                      </li>
                      <li>Airbnb listings link</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <hr className="featurette-divider margin-top-45" />
      </div>
    );
  }
}

export default FAQ;
