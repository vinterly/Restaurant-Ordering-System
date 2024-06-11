import React, { useContext } from "react"
import "./Menu.css"
import { StoreContext } from "../../context/StoreContext"
import MenuItem from "../MenuItem/MenuItem"

const Menu = () => {

    const {menu_items} = useContext(StoreContext)

    return (
        <div className="menu-items" id="menu-items" >
            <h1>Explore our menu</h1>
            <p className="menu-text">Embark on a culinary journey through the Nordic lands with our exquisite menu. From traditional favourites to modern delights, our menu offers a wide range of options to satisfy your cravings.</p>
            <div className="menu-list">
                {menu_items.map((item,index)=> {
                    return <MenuItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} available={item.available} hot={item.hot}/>
                })}
            </div>
        </div>
    )
}

export default Menu