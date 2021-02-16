import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <Typed 
                    className="typed-text"
                    strings={["DevOps", "Cryptography", "BlockChain"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header;