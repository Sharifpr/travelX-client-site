import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/banner.png";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Package from '../Package/Package'
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import image01 from '../../assets/images/b-1.64c64476.png';
import PuffLoader from "react-spinners/PuffLoader";
// import usePackages from "../../hooks/usePackages";
import useAuth from "../../hooks/useAuth";
import Services from "../Services/Services";
import Accordian from "../Accordian/Accordian";


const Home = () => {
    const history = useHistory();
    const { packages, loading, setloading, loaderStyle } = useAuth();

    const featurePackages = packages.slice(0, 6);

    function GoServices() {
        history.push("/packages");
        setloading(false)
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
                                <h1 className="text-white">Life is short and the world is wide.</h1>
                            </Bounce>

                            <Bounce right cascade>
                                <p className="my-4 text-white fs-5">
                                    Travel becomes a way for people to deal with different situations, experience new things, or help search for a sense of self.
                                </p>
                            </Bounce>

                            <Bounce>
                                <Button
                                    onClick={GoServices}
                                    className="rounded-pill fs-5 py-2 px-4"
                                    variant="primary"
                                >
                                    View Packages
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
                        <h2 className="text-center text-white mb-2">Popular Tour Package</h2>
                    </Slide>
                    <Slide right>
                        <p className="text-muted text-center">
                            Here you can find our all latest courses. Choose some of them and
                            try to grow up your skills.
                        </p>
                    </Slide>
                    <PuffLoader loading={loading} css={loaderStyle} color={"#ecf0f1"} size={150} />
                    <Row>
                        {featurePackages?.map((tour) => (
                            <Package tour={tour} key={tour.key}></Package>
                        ))}
                    </Row>
                </Container>
            </div>
            <div className="text-center my-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <Accordian></Accordian>
                    </div>
                    <div className="col-md-6">
                        <img src={image01} height='80%' width="80%" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;