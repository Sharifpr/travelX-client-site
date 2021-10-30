import React from 'react';
import bgImage from "./../../assets/images/sectionBg.png";
import { Container, Row } from 'react-bootstrap';
import Zoom from "react-reveal/Zoom";
// import usePackages from '../../hooks/usePackages';
import Package from '../Package/Package';
import useAuth from '../../hooks/useAuth';


const Packages = () => {
    const { packages, totalPage, currentPage, setCurrentPage } = useAuth();


    const handlePagenation = (number) => {
        setCurrentPage(number)
    }
    console.log(currentPage)

    return (
        <div
            style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
        >
            <Container className="py-5">
                <Zoom right cascade>
                    <h2 className="text-center text-white mb-0">Our All Courses</h2>
                </Zoom>
                <Zoom left cascade>
                    <p className="my-4 mt-2 text-center text-muted fs-5">
                        Learn exciting technologies from web development, design, game
                        development and more!
                    </p>
                </Zoom>
                <Row>
                    {
                        packages.map(tour => <Package
                            key={tour._id}
                            tour={tour}
                        ></Package>)
                    }
                </Row>
                <div className="d-flex justify-content-center">
                    {
                        [...Array(totalPage).keys()].map(number => <button
                            onClick={() => handlePagenation(number)}
                            key={number}
                            className={number === currentPage ? "btn btn-primary text-dark rounded-1 border" : 'btn btn-light rounded-2 border'}
                        >
                            {number + 1}
                        </button>)
                    }
                </div>
            </Container>
        </div>
    );
};


export default Packages;