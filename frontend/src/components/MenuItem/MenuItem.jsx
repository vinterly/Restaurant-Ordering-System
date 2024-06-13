import React, { useContext } from "react";
import "./MenuItem.css";
import { StoreContext } from "../../context/StoreContext";

const MenuItem = ({id, name, price, description, image, available, hot}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className="menu-item">
            <div className="menu-item-img-container">
                <img src={"http://localhost:5173/src/assets/"+image} alt={name} className="menu-item-img"/>
{/*                 {available && (
                    !cartItems[id] 
                    ? <button className="menu-item-btn-add" onClick={() => addToCart(id)}>Add</button>
                    :<div className="menu-item-quantity">
                        <button className="menu-item-quantity-btn-remove" onClick={() => removeFromCart(id)}>-</button>
                        <p className="menu-item-quantity-count">{cartItems[id]}</p>
                        <button className="menu-item-quantity-btn-add" onClick={() => addToCart(id)}>+</button>
                    </div>
                )} */}
            </div>
            <div className="menu-item-info">
                <div className="menu-item-name-hot">
                    <p className="menu-item-name">{name}</p>
                    {hot ? <p className="menu-item-emoji">🌶️</p> : null}
                </div>
                <div className="div menu-item-desc">{description}</div>
                <div className="div menu-item-price-avail">
                    <div className="div menu-item-price">{parseFloat(price).toFixed(2)} kr</div>
                    <div className="div menu-item-availability">{available ? null : "Not available"}</div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem