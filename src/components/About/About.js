import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
    return (
        <div
            style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
            className="py-5"
        >
            <Container>
                <Zoom>
                    <h2 className="text-center text-white mb-4">
                        WELCOME TO OUR TREAVELX TURISOM WORLD
                    </h2>
                </Zoom>
                <Row>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-white">We Provide Solutions</h5>

                            <p className="text-muted">
                                Travelex Travels & Tours acquired IATA status within six months and placed itself to offer unmatched service for the thriving tourism market. The company worked hard to build a reputation in the already competitive market to become a trusted supplier for those who wish to explore the freshest destinations of the world.
                            </p>
                            <p className="text-muted">
                                Over a twelve year period, Dubai became famous as one of the premier tourist city in the world and we made most of its popularity by surfing the wave of its newly found fame. From pristine beaches and supreme hotels to first-rate shopping and excellent sporting facilities, we can offer all that Dubai is well known for and has become synonymous with in the region. We warmly welcome the international traveler to sample our hospitality and at the same time invite them to experience our unique way of client interaction with a focus on long lasting friendships.
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-white">Our Vision</h5>
                            <p className="text-muted">
                                Travelling and Preserving Mother Nature, Hand in Hand!
                            </p>
                            <h5 className="text-white">Our Mission</h5>
                            <p className="text-muted">
                                Travelex Travels & tours would like to play its part in bringing awareness in the industry by introducing responsible travel, more lately known as ‘Ecotourism’.

                                As technology advances, the environment is constantly challenged to keep up with the waste produced due to travel. Dwindling water supply, damage to the ozone layer, recycling of waste and long term sustainability in tourism, we are persistently confronted to search for solutions. Travelex Travels & Tours would like to play its part by educating the customer without forgoing the joys of travel. As a result, travelling becomes more fulﬁlling and rewarding when a thought is spared for the coming generations. We invite all environmental conscious people to join us in this endeavor by contributing to our blog. Let us work together for a healthier tomorrow.
                            </p>
                        </Bounce>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md>
                        <Bounce bottom>
                            <h5 className="text-white">Sign up for our monthly newsletter</h5>
                            <p className="text-muted">
                                Be the first to know about news and updates.We never share you
                                mail with others. Trust us!
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="d-flex align-items-center">
                        <Bounce bottom>
                            <Form className="w-100">
                                <Form.Label className="text-white">
                                    Leave your mail below
                                </Form.Label>
                                <Form.Group
                                    className="d-flex text-white"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        style={{ background: "transparent", color: "white" }}
                                        className="py-2 rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <button
                                        style={{ width: "120px" }}
                                        className="btn rounded-0 btn-primary"
                                    >
                                        SIGN UP
                                    </button>
                                </Form.Group>
                            </Form>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;