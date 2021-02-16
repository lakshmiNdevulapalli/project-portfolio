import React from 'react'
import devOps from "../ops.jpg"
import crypto from "../crypto.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    const openPopupboxCrypto = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={crypto} alt="Crypto thesis"/> 
            <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            <b>Crypto Thesis work:</b> <a className="hyper-link" onClick={() => window.open("https://digitalcommons.wku.edu/theses/2614/")}>https://digitalcommons.wku.edu/theses/2614/</a>
            </>
        )
        
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Application of Huffman Data Compression Algorithm in Hashing Computation"
                }
            }
        });
    }

    const popupboxconfigCrypto = {
        titleBar: {
            enable: true,
            text: "Application of Huffman Data Compression Algorithm in Hashing Computation"
        },
        fadeIn: true,
        faceInSpeed: 500
    }

    const openPopupboxDevops = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={devOps} alt="devops"/> 
            <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            </>
        )
        
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "My DevOps Work includes"
                }
            }
        });
    }

    const popupboxconfigDevops = {
        titleBar: {
            enable: true,
            text: "My DevOps Work includes"
        },
        fadeIn: true,
        faceInSpeed: 500
    }

    return (
            <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">
                        Portfolio
                    </h1>
                    <div className="image-box-wrapper row justify-content-center">
                        <div className="portfolio-image-box" onClick={openPopupboxCrypto}>
                            <img className="portfolio-image" src={crypto} alt="Crypto thesis"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        {/**/}
                        <div className="portfolio-image-box" onClick={openPopupboxDevops}>
                            <img className="portfolio-image" src={devOps} alt="devops"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
                <PopupboxContainer {...popupboxconfigCrypto} />
                <PopupboxContainer {...popupboxconfigDevops} />
            </div>
    )
}

export default Portfolio
