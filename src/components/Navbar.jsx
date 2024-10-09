import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top py-3" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Pocket
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-3">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex flex-wrap">
                        {!props.isLogin ? (
                            <>
                                <button className="btn btn-success mx-2">
                                    <NavLink className="nav-link text-white" to="/login">
                                        <i className="fa-solid fa-circle-user my-auto"></i>&ensp;Login
                                    </NavLink>
                                </button>
                                <button className="btn btn-success mx-2">
                                    <NavLink className="nav-link text-white" to="/createnew">
                                        <i className="fa-solid fa-user-plus"></i>&ensp;Create Account
                                    </NavLink>
                                </button>
                            </>
                        ) : (
                            <button className="btn btn-light mx-2">
                                <NavLink className="nav-link" to="/profile">
                                    <i className="fa-solid fa-user"></i>&ensp;Profile
                                </NavLink>
                            </button>
                        )}


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;