import "./header.css";
import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const Header = () => {

    const { AllContexts, selectedPackage } = useAuth();
    const { user, logOut } = AllContexts;

    const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
    };
    const navStyle = {
        textDecoration: "none",
        margin: "0 8px",
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        textTransform: "Uppercase",
    };
    return (
        <div className="sticky-top">
            <Navbar

                expand="lg" style={{ backgroundColor: "#8e44ad" }}
            >
                <Container>
                    <NavLink
                        className="hoverStyle text-decoration-none sm-mb-3"
                        to="home"
                    >
                        <Navbar.Brand className="navBarBrand">
                            <span className="fw-bold text-white">TrevelX</span>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/home"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/packages"
                            >
                                Packages
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/contact"
                            >
                                Contact
                            </NavLink>


                            {user.displayName ? (
                                <>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </NavLink>
                                    <div>
                                        <NavDropdown
                                            title={
                                                <>
                                                    <img
                                                        style={{ width: "45px", borderRadius: "50%" }}
                                                        src={user.photoURL}
                                                        alt="profile"
                                                    />
                                                </>
                                            }
                                        >
                                            <div className="text-center">
                                                <p>{user.displayName}</p>
                                                <p>{user.email}</p>
                                                <div className="text-center">
                                                    <button onClick={logOut} className="btn btn-primary">
                                                        Log Out
                                                    </button>
                                                </div>
                                            </div>
                                        </NavDropdown>
                                    </div>
                                </>

                            ) : (
                                <>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/signup"
                                    >
                                        Sign up
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;