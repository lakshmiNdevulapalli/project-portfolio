import React from "react";
// Import the author image (assuming it's in the "src" folder)
import Author from "../author.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            {/* Create a responsive row */}
            <div className="row">
                {/* Left column: Author image */}
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        {/* Use the imported image */}
                        <img className="profile-img" src={Author} alt="author" />
                    </div>
                </div>
                {/* Right column: About Me text */}
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-me-heading">About me</h1>
                    <p>
                        Results-oriented professional with 6 years of software engineering
                        experience and proven knowledge of Design Deploy and managing a wide
                        variety of cloud Infrastructures. Expertise in AWS services, CI/CD
                        pipelines and Automation, DevSecOps strategy, Release, and
                        configuration management. Expertise in out-of-the-box thinking,
                        project management skills, strategic development, and leadership
                        skills. Good team player with exceptional problem-solving abilities
                        and communication skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;