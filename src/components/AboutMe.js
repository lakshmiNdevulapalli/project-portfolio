import React from "react"
import Author from "../author.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-me-heading">About me</h1>
                    <p>
                    Results-oriented professional with 6 years of software engineering experience and proven knowledge of Design Deploy 
                    and managing a wide variety of cloud Infrastructures, Expertise in AWS services, CI/CD pipelines and Automation, and 
                    DevSecOps strategy, Release, and configuration management. Expertise in out-of-the-box thinking, project management skills, 
                    strategic development, and leadership skills. Good team player with exceptional problem-solving abilities and communication skills. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
