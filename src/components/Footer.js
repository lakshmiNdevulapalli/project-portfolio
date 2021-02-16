import React from "react"
import {FacebookShareButton, FacebookIcon , TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from "react-share"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>I live in 🏠 Irine, CA</p>
                        </div>
                        <div className="d-flex">
                            <p>Phone number available on request 😎 </p>
                        </div>
                        <div className="d-flex">
                            <p>baludevulapalli@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGithub} size="2x"/>
                                <a href="https://github.com/lakshmiNdevulapalli">&nbsp;&nbsp;&nbsp;My GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="footer-nav">Home</a>
                                <br/>
                                <a href="footer-nav">About Me</a>
                                <br/>
                                <a href="footer-nav">Services</a>
                                <br/>
                            </div>
                            <div className="col">
                                <a href="footer-nav">Experience</a>
                                <br/>
                                <a href="footer-nav">Portfolio</a>
                                <br/>
                                <a href="footer-nav">Contact</a>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton 
                                url={"https://www.facebook.com/bsubrahmanyam2"}
                                quote={"DevOps Engineer"}
                                hashtag="#BalaDevOps"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://twitter.com/baludevulapalli"}
                                quote={"DevOps Engineer"}
                                hashtag="#BalaDevOps"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton 
                                url={"https://www.linkedin.com/in/dvln-010a391a/"}
                                quote={"DevOps Engineer"}
                                hashtag="#BalaDevOps"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrights&copy;
                            {new Date().getFullYear()}&nbsp;Lakshmi N Venkata | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
