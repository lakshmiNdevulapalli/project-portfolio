import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["DevOps", "Cryptography", "Blockchain"], // Strings to type
            typeSpeed: 40,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            typed.destroy(); // Clean up on unmount
        };
    }, []);

    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <span ref={typedElement} className="typed-text"></span>
                <a href="#" className="btn-main-offer">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Header;