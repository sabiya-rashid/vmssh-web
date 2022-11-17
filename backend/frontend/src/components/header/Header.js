import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logoVm from '../../assets/logo.svg';
import './Header.css'
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to="/" className="d-flex align-items-center navbar-brand">
                    <img src={logoVm} className="img-fluid rounded-top" alt="logo" />
                    <p className="mb-0 fs-sm logo-text fw-bold ps-3">VMS Speciality Hospital <br />
                        <span className="fw-normal">(VMSHH)</span>
                    </p>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto px-md-0 px-3">
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/who-we-are'>Who we are</CustomLink>
                        <CustomLink to='/project'>Hospital project</CustomLink>
                        <CustomLink to='/our-work'>Our work</CustomLink>
                        <CustomLink to='/get-involved'>Get Involved</CustomLink>
                        {/* <li className="nav-item mx-lg-3 mt-lg-0 mt-3" data-bs-toggle="modal" data-bs-target="#loginModal">
                            <button className="btn fs-sm px-4 fw-bold outline-primary rounded-pill">Login/ Signup</button>
                        </li> */}
                    </ul>
                </div>
            </div>
            <Login />
            <Signup />
        </nav>

    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={`nav-item ps-lg-3 ${isActive ? " active" : ""}`}>
            <Link className="nav-link" to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
export default Header;

