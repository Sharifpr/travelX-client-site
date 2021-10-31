import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from "../../hooks/useAuth.js";
import { useState } from "react";
import { useEffect } from "react";

const PackageDetails = () => {
    const history = useHistory()
    const [tour, setTour] = useState({});
    const { id } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);

    const { addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;

    useEffect(() => {
        fetch(`https://ancient-temple-97023.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?._id) {
                    setTour(data)
                }
                else {
                    alert("Some thing is wrong")
                }

            })

    }, [id])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        fetch(`https://ancient-temple-97023.herokuapp.com/orders/${id}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                    reset()
                } else {
                    setIsUpdated(false);
                }
            });
        console.log(data);
    };

    return (
        <div className="my-5 container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-3">
                        <div className="row d-flex g-0">
                            <div className="w-50">
                                <img src={tour?.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="w-50">
                                <div className="card-body">
                                    <h4 className="card-title">{tour?.title}</h4>
                                    <h5 className="card-title">{tour?.desc}</h5>
                                    <p className="card-text">Price: ${tour?.price}</p>
                                    <div>
                                        <Rating
                                            readonly
                                            style={{ color: "goldenrod" }}
                                            initialRating={tour?.rating}
                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                        />{" "}
                                        {tour?.rating}
                                        <div>Total Ratting: {tour?.ratingCount}</div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (uid) {
                                                addToCart(tour)
                                            }
                                            else {
                                                history.push('/login')
                                            }
                                        }}
                                        className="btn btn-primary"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="p-2 m-2"
                            placeholder="Enter your name"
                            defaultValue={user?.displayName}
                            {...register("user", { required: true })}
                        />
                        <input
                            className="p-2 m-2"
                            placeholder="Enter your email"
                            defaultValue={user?.email}
                            {...register("email", { required: true })}
                        />
                        <input
                            className="p-2 m-2"
                            placeholder="Enter your destination"
                            defaultValue={tour?.title}
                            {...register("title", { required: true })}
                            required
                        />
                        <input
                            className="p-2 m-2"
                            type="text"
                            placeholder="Enter your address"
                            defaultValue="Address"
                            {...register("address", { required: true })}
                            required
                        />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <input
                            className="btn btn-primary w-50"
                            type="submit"
                            value="place order"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default PackageDetails;



