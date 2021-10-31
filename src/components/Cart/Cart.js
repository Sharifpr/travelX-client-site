import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth.js";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const history = useHistory()
    const { selectedPackage, setSelectedPackage, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;
    const totalCost = selectedPackage.reduce(
        (previous, tour) => previous + tour.price, 0
    );

    // console.log(selectedPackage);

    const handleRemove = id => {
        // console.log(id);
        fetch(`https://ancient-temple-97023.herokuapp.com/delete/${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('successfully remove')
                }
            })

    }




    return (
        <div className="my-4">
            {totalCost ? (
                <Container>
                    <Row>
                        <Col md={8}>
                            {selectedPackage.map((tour) => (
                                <Row key={tour._id} className="bg-info my-3">
                                    <Col
                                        className="p-0 d-flex align-items-center justify-content-center"
                                        md={4}
                                    >
                                        <img width="100%" src={tour.img} alt="" />
                                    </Col>
                                    <Col className="py-2">
                                        <h6 md={8}>{tour.title}</h6>

                                        <Row>
                                            <Col>
                                                <Row>
                                                    <h6 className="my-1">Price:${tour.price}</h6>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Rating
                                                            readonly
                                                            style={{ color: "goldenrod" }}
                                                            initialRating={tour.rating}
                                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                                        />{" "}
                                                        {tour.rating}
                                                        <p className="m-0">
                                                            Total Review: {tour.ratingCount}
                                                        </p>
                                                    </Col>
                                                    <Col className="d-flex align-items-center">
                                                        <NavLink
                                                            to={`/packages/${tour?._id}`}
                                                            className="w-50 btn py-2 btn-primary"
                                                        >
                                                            View Details
                                                        </NavLink>
                                                        <button
                                                            onClick={() => handleRemove(tour._id)}
                                                            className="btn py-2 ms-1 w-50 btn-primary"
                                                        >
                                                            Remove
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                        <Col
                            className="position-fixed"
                            style={{ top: "100px", right: "30px" }}
                            md={4}
                        >
                            <div className="text-center my-2">
                                <h3>Total {selectedPackage.length} tour Selected</h3>

                                <button

                                    onClick={() => {
                                        fetch(`https://ancient-temple-97023.herokuapp.com/purchase/${uid}`, {
                                            method: "delete"
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                if (data.deletedCount > 0) {

                                                    alert("Thanks for chackout this tour!!");
                                                    setSelectedPackage([]);
                                                    history.push('/home')
                                                }
                                            })

                                    }}
                                    className="btn btn-primary"
                                >
                                    Proceed to purchase
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <h1 className="text-center my-5 py-5">No tour Selected</h1>
            )}
        </div>
    );
};

export default Cart;