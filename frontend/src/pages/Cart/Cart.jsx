import React, { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {

    const {cartItems, menuItems, removeFromCart, calculateAllItemsAreHot, getTotalCartAmount, getHotDiscount, getTotalCartAmountWithDiscount, deliveryFee} = useContext(StoreContext);

    const navigate = useNavigate();

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
                {menuItems.map((item, index) => {
                    if(cartItems[item.id] > 0) {
                        return (
                            <div>
                                <div key={index} className="cart-items-title cart-items-item">
                                    <img src={"http://localhost:5173/src/assets/"+item.imageFilename} alt={item.name} />
                                    {item.isHot ? <p>{item.name} 🌶️</p> : <p>{item.name}</p>}
                                    <p>{item.price} kr</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>{item.price * cartItems[item.id]} kr</p>
                                    <p onClick={() => removeFromCart(item.id)} className="cross">x</p>
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
                            <p>{getTotalCartAmount()} kr</p>
                        </div>
                        {calculateAllItemsAreHot() && (
                            <div>
                                <hr />
                                <div className="cart-total-details">
                                    <p>🌶️ Discount</p>
                                    <p>-{parseFloat(getHotDiscount()).toFixed(2)} kr</p>
                                </div>
                            </div>
                        )}
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{deliveryFee} kr</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{getTotalCartAmountWithDiscount()+deliveryFee} kr</b>
                        </div>
                        <button onClick={() => navigate("/order")} className="place-order-btn">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart