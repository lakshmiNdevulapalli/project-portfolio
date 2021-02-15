import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDocker, faAws, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">my services include</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDocker} size="2x"/></div>    
                                <h3>Docker</h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faAws} size="2x"/></div>
                                <h3>AWS Cloud services</h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faNodeJs} size="2x"/></div>
                                <h3>NodeJS</h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faPython} size="2x"/></div>
                                <h3>Python</h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
