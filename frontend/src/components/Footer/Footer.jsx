import React from "react"
import "./Footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="div footer-content-left">
                    <img src={assets.logo} alt="logo" className="footer-logo"/>
                    <p className="footer-text">At NordicDelights, we are passionate about bringing the rich flavours of the Nordic region straight to your doorstep. Enjoy the convenience of ordering authentic Scandinavian cuisine with just a few clicks.</p>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Contact</h2>
                    <ul>
                        <li>+47 123 45 678</li>
                        <li>contact@nordicdelights.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright © 2024 NordicDelights.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer