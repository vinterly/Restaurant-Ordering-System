import React, { useState } from "react"
import "./Navbar.css"
import { assets } from "../../assets/assets"

const Navbar = () => {

    const [menu, setMenu] = useState("menu");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="Nordic Delights logo" className="logo"/>
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
                <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</li>
            </ul>
            <div className="navbar-right">
                <div className="navbar-basket-icon">
                    <img src={assets.basket_icon} alt="basket icon" className="basket-icon"/>
                    <div className="dot"></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar