import React, { useState, useContext } from "react"
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {

    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="Nordic Delights logo" className="logo"/></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href="#menu-items" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <div className="navbar-basket-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="basket icon" className="basket-icon"/></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar