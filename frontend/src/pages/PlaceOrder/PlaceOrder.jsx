import React, { useContext } from "react"
import "./PlaceOrder.css"
import { StoreContext } from "../../context/StoreContext"


const PlaceOrder = () => {

    const {cartItems, menuItems} = useContext(StoreContext);

    const allItemsAreHot = Object.keys(cartItems).length > 0 && Object.keys(cartItems).every(itemId => {
        const item = menuItems.find(menuItem => menuItem._id === itemId);
        return item && item.hot;
    });

/*     const totalAmount = getTotalCartAmount();
    const hotDiscount = allItemsAreHot ? totalAmount * 0.1 : 0;
    const totalWithDiscount = totalAmount - hotDiscount; */

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{0} kr</p>
                        </div>
                        {allItemsAreHot && (
                            <div>
                                <hr />
                                <div className="cart-total-details">
                                    <p>🌶️ Discount</p>
                                    <p>{0} kr</p>
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
                            <b>{0+99} kr</b>
                        </div>
                        <button className="place-order-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder