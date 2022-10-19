/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="square"
                            src={require("assets/img/brand/lit-logo.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Medium
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Zine (Coming Soon!)
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">4</span>
                          <span className="description">Posts</span>
                        </div>
                        <div>
                          <span className="heading">10000</span>
                          <span className="description">words</span>
                        </div>
                        <div>
                          <span className="heading">20</span>
                          <span className="description">Minute Read</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      The Literature{" "}
                      <span className="font-weight-light"> - Welcome!</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Writer: Abhilasha Callaway (Luckie)
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Welcome to the BIGSIS literature page - here is some writing about why we do what we do.
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Thanks for checking this out!
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                    <h3>
                      About the Author{" "}
                      <span className="font-weight-light"> - luckie</span>
                    </h3>
                      <Col lg="9">
                        <p>
                          Abhilasha has been writing in three languages since the age of 7. This is where their writing resides now. Thank you for reading, I cannot tell you how much this means to me. I didn't know so many eyes would be on my words. My heart clenches; does not unclench.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Table of Contents
                        </a>
                      </Col>
                    </Row>
                  </div>
                  <Row className="justify-content-center">
                    <div>
                      <h3 className="description mt-3"> First Post - Date: </h3>
                    </div>
                    <div> The Why </div>
                    <div className="font-weight-light text-center mt-5">
                      This past summer, my family experienced a series of situations with apocalyptic consequences. I felt so traumatized, so afraid for my family’s safety in the United States, I dissociated. I watched my family, my mother, my sister, my wife, myself suffer sleepless nights, anxious retching, endless tears. Each of us was reduced to our most triggered selves. Each of us, unable to think clearly, see clearly, breathe easy. This mercury retrograde, I watched everyone I dearly love grate and grind against impossible situation after impossible situation after impossible situation. There were some weeks this past retrograde, where I was convinced my family had been hexed by a poltergeist/jealous ex. A powerful witch, at that. I couldn’t sleep, I couldn’t think, I fell into superstitious suspicion, a paranoia of epic proportions. Proportions, epic as they may be, I found that my anxiety matched the severity of the situation(s) I found my family and myself in.

                      Every action has an equal and an opposite reaction

                      I’ve done it before, so I do it again. Tooth and nail, blood and tears, sleepless night and weepful phone calls, banshee screeches and screaming matches, betrayal and doubt, I do it again. I live through another retrograde. No one dies, no losses. But never have we come closer. This summer, my family was in the most danger of self harm, of manic impulse, of ….of the worst thing. We were in danger of the worst thing because of the USCIS, because of the prolonged backlog of applications that pile high on in the cubicles of every USCIS officer in every USCIS office across the United States.

                      But we survive. We survive with our necks, we survive with legal status each. But gods, do we feel loss.

                      Every action has an equal and an opposite reaction

                      I can only speak for myself. So I will: what I experienced felt so dark, so dementor, that this nonprofit, this work I have already sunk in, this light is the only viable equal and opposite reaction. What happened was so screwed up, the only sustainable way out is policy change, is advocacy.

                      That is what is happening. That is what I’m doing. This is why.
                    </div>
                  <div>
                  </div>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
