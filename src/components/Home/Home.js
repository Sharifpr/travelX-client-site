import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/banner.png";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Package from '../Package/Package'
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

// import usePackages from "../../hooks/usePackages";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const history = useHistory();
    const { packages } = useAuth();
    const featurePackages = packages.slice(0, 6);

    function GoServices() {
        history.push("/packages");
    }

    return (
        <div>
            <div
                style={{
                    background: `url(${Bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
                <Container>
                    <div
                        style={{ height: "90vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <Bounce left cascade>
                                <h1 className="text-white">Learn to be creative</h1>
                            </Bounce>

                            <Bounce right cascade>
                                <p className="my-4 text-white fs-5">
                                    Learn exciting technologies from web development, design, game
                                    development and more!
                                </p>
                            </Bounce>

                            <Bounce>
                                <Button
                                    onClick={GoServices}
                                    className="rounded-pill fs-5 py-2 px-4"
                                    variant="primary"
                                >
                                    View Courses
                                </Button>
                            </Bounce>
                        </div>
                    </div>
                </Container>
            </div>
            <div
                style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
            >
                <Container className="py-5">
                    <Slide left>
                        <h2 className="text-center text-white mb-2">Featured Courses</h2>
                    </Slide>
                    <Slide right>
                        <p className="text-muted text-center">
                            Here you can find our all latest courses. Choose some of them and
                            try to grow up your skills.
                        </p>
                    </Slide>
                    <Row>
                        {featurePackages?.map((tour) => (
                            <Package tour={tour} key={tour.key}></Package>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;