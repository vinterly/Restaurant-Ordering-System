import React, { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {

    const {cartItems, menu_items, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    const navigate = useNavigate();


    const allItemsAreHot = Object.keys(cartItems).length > 0 && Object.keys(cartItems).every(itemId => {
        const item = menu_items.find(menuItem => menuItem._id === itemId);
        return item && item.hot;
    });

    const totalAmount = getTotalCartAmount();
    const hotDiscount = allItemsAreHot ? totalAmount * 0.1 : 0;
    const totalWithDiscount = totalAmount - hotDiscount;

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {menu_items.map((item, index) => {
                    if(cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div key={index} className="cart-items-title cart-items-item">
                                    <img src={item.image} alt={item.name} />
                                    {item.hot ? <p>{item.name} 🌶️</p> : <p>{item.name}</p>}
                                    <p>{item.price} kr</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]} kr</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                                </div>
                                <hr />

                            </div>    
                        )
                            
                            
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{totalAmount} kr</p>
                        </div>
                        {allItemsAreHot && (
                            <div>
                                <hr />
                                <div className="cart-total-details">
                                    <p>🌶️ Discount</p>
                                    <p>{parseFloat(hotDiscount).toFixed(2)} kr</p>
                                </div>
                            </div>
                        )}
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{99} kr</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{totalWithDiscount+99} kr</b>
                        </div>
                        <button onClick={() => navigate("/order")} className="place-order-btn">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart