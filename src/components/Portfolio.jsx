import React from "react";
import devOps from "../assets/images/devops.jpg";
import crypto from "../assets/images/crypto.jpg";
import CustomFontAwesomeIcon from "./CustomFontAwesomeIcon";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={crypto} alt="Crypto Project" />
                        <CustomFontAwesomeIcon
                            icon={faSearchPlus}
                            color="blue"
                            size="2x"
                        />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={devOps} alt="DevOps Project" />
                        <CustomFontAwesomeIcon
                            icon={faSearchPlus}
                            color="blue"
                            size="2x"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;