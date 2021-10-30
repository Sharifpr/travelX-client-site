import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from "../../hooks/useAuth.js";
import { useState } from "react";
import { useEffect } from "react";

const PackageDetails = () => {
    const history = useHistory()
    const [tour, setTour] = useState();
    const { _id } = useParams();
    const { addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;

    useEffect(() => {
        fetch(`https://ancient-temple-97023.herokuapp.com/packages/${_id}`)
            .then(res => res.json())
            .then(data => setTour(data))

    }, [_id])

    return (
        <div className="my-5">
            <Row>
                <Col className="ms-5">
                    <img width="75%" src={tour?.img} alt="" />
                </Col>
                <Col className="p-3">
                    <h1>{tour?.title}</h1>
                    <h4>{tour?.desc}</h4>
                    <Col className="p-3">
                        <Row>
                            <Col>
                                <h1>Price: {tour?.price}$</h1>

                                <div>
                                    <Rating
                                        readonly
                                        style={{ color: "goldenrod" }}
                                        initialRating={tour?.rating}
                                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                    />{" "}
                                    {tour?.rating}
                                    <div>Total Review: {tour?.ratingCount}</div>
                                </div>

                                <div className="d-flex">
                                    <button
                                        onClick={() => {
                                            if (uid) {
                                                addToCart(tour)
                                            }
                                            else {
                                                history.push('/login')
                                            }
                                        }}
                                        className="w-50 ms-1 mt-3 btn btn-primary"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};
export default PackageDetails;



