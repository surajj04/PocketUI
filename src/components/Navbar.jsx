import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top py-3" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand " to="/">
                    <img src="/nav-logo.png" alt="Pocket-Logo"  width={70}/>&ensp;<span className='nav-logo fs-3'>Pocket</span>
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
                                to="/features"
                            >
                                Features
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
                                <NavLink className="nav-link text-white" to="/login">
                                    <button className="btn btn-success mx-2">
                                        <i className="fa-solid fa-circle-user my-auto"></i>&ensp;Login
                                    </button>
                                </NavLink>
                                <button className="btn btn-success mx-2">
                                    <NavLink className="nav-link text-white" to="/createnew">
                                        <i className="fa-solid fa-user-plus"></i>&ensp;Create Account
                                    </NavLink>
                                </button>
                            </>
                        ) : (
                            <NavLink className="nav-link" to="/profile">
                                <button className="btn btn-light mx-2">
                                    <i className="fa-solid fa-user"></i>&ensp;Profile
                                </button>
                            </NavLink>
                        )}


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;