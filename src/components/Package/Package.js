import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";
import useAuth from "../../hooks/useAuth.js";
import { NavLink } from "react-router-dom";

library.add(fullStar, emptyStar);

function Package(props) {
    const history = useHistory();
    const { _id, img, title, price, provider, rating, ratingCount } = props.tour;

    const { addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;

    return (
        <Col className="my-3 rounded-3" md={4}>
            <Zoom>
                <Card style={{ minHeight: "480px" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fs-2">{title}</Card.Title>
                        <Card.Text className="text-muted text-uppercase">{provider}</Card.Text>
                        <p>
                            {" "}
                            <b>Price: {price}$ <small>/per person</small></b>
                        </p>
                        <div className="mb-3">
                            <Row>
                                <Col>
                                    <Rating
                                        readonly
                                        style={{ color: "goldenrod" }}
                                        initialRating={rating}
                                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                    />{" "}
                                    {rating}
                                </Col>
                                <Col>Total Ratting: {ratingCount}</Col>
                            </Row>
                        </div>
                        <div className="d-flex">
                            <NavLink to={`/packages/${_id}`} className="w-50 btn btn-primary">
                                View Details
                            </NavLink>
                            <Button
                                onClick={() => {
                                    if (uid) {
                                        addToCart(props.tour)
                                    }
                                    else {
                                        history.push('/login')
                                    }
                                }}
                                className="w-50 ms-1"
                                variant="primary"
                            >
                                Book Now
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
}

export default Package;






