import React from "react";
import CustomFontAwesomeIcon from "./CustomFontAwesomeIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {/* Contact Details */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>I live in 🏠 Irvine, CA</p>
                        </div>
                        <div className="d-flex">
                            <p>Phone number available on request 😎</p>
                        </div>
                        <div className="d-flex">
                            <p>baludevulapalli@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <CustomFontAwesomeIcon icon={faGithub} color="black" size="2x" />
                            <a
                                href="https://github.com/lakshmiNdevulapalli"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &nbsp;&nbsp;&nbsp;My GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;