import React from "react";
import CustomFontAwesomeIcon from "./CustomFontAwesomeIcon";
import { faDocker, faAws, faPython, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return (
        <div id="service" className="services">
            <h1 className="text-center py-5">My Services Include</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <CustomFontAwesomeIcon icon={faDocker} color="blue" size="2x" />
                            <h3>Docker</h3>
                            <p>Streamlining development with containerization.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <CustomFontAwesomeIcon icon={faAws} color="orange" size="2x" />
                            <h3>AWS Cloud Services</h3>
                            <p>Designing scalable and secure cloud architectures.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <CustomFontAwesomeIcon icon={faNodeJs} color="green" size="2x" />
                            <h3>NodeJS</h3>
                            <p>Building fast and efficient server-side applications.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <CustomFontAwesomeIcon icon={faPython} color="yellow" size="2x" />
                            <h3>Python</h3>
                            <p>Automation, scripting, and AI/ML integrations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;