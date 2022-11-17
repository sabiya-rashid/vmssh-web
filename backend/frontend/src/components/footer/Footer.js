import React from "react";
import { Link } from "react-router-dom";

import './Footer.css'
import footerLogo from '../../assets/footer-logo.svg'
import facebook from '../../assets/fbSocial.svg';
import twitter from '../../assets/twSocial.svg';
import instagram from '../../assets/igSocial.svg';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container pt-5">
                    <div className="row mx-0">
                        <div className="col-md-3 text-center">
                            <Link to="/" className="text-white" href="/">
                                <div className="text-center">
                                <img src={footerLogo} className="img-fluid text-center mb-3" alt="logo" />
                                </div>
                                <h6 className="fw-bold fs-sm">VMS Speciality Hospital <span className="fw-normal">(VMSHH)</span>
                                </h6></Link>
                        </div>
                        <div className="col-md-6 offset-md-3">
                            <nav className="mt-3">
                                <ul className="nav justify-content-end  ">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/contact-us">Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="d-flex mt-4 justify-content-end">
                                <a className="px-3" href="/"><img src={facebook} className="img-fluid" alt="social" /></a>
                                <a className="px-3" href="/"><img src={twitter} className="img-fluid" alt="social" /></a>
                                <a className="px-3" href="/"><img src={instagram} className="img-fluid" alt="social" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-3">
                    <p className="text-white pt-5 pe-3 fs-sm text-end">&copy; All Rights Reserved <a href="/" className="aiiots">AIIOTS Geek Private Limited</a></p>
                </div>
            </section >
        </>
    )
}

export default Footer;