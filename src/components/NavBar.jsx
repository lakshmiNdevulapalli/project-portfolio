import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
import CustomFontAwesomeIcon from '../components/CustomFontAwesomeIcon';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand" href="#home">
                    <img className="logo" src={logo} alt="Logo" />
                </a>

                {/* Hamburger Menu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <CustomFontAwesomeIcon icon={faBars} color="#fff" size="1x" />
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="home"
                                className="nav-link"
                                href="#home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="about"
                                offset={-110}
                                className="nav-link"
                                href="#about"
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="service"
                                offset={-110}
                                className="nav-link"
                                href="#service"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="experience"
                                offset={-160}
                                className="nav-link"
                                href="#experience"
                            >
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="portfolio"
                                offset={-110}
                                className="nav-link"
                                href="#portfolio"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                smooth={true}
                                to="contact"
                                offset={-110}
                                className="nav-link"
                                href="#contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;