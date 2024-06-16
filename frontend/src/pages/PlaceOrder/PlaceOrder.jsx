import React, { useContext } from "react"
import "./PlaceOrder.css"
import { StoreContext } from "../../context/StoreContext"
import Input from "../../components/Input/Input";
import { useForm, FormProvider } from "react-hook-form";
import { city_validation, email_validation, first_name_validation, last_name_validation, street_validation, state_validation, zip_code_validation, country_validation, phone_validation } from "../../utils/inputValidations";


const PlaceOrder = () => {

    const {getHotDiscount, getTotalCartAmount, calculateAllItemsAreHot, getTotalCartAmountWithDiscount} = useContext(StoreContext);

    const methods = useForm(); 
    
    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
    });

    return (
        <FormProvider {...methods}>
            <form className="place-order" onSubmit={e => e.preventDefault()} noValidate>
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <Input {...first_name_validation}/>
                        <Input {...last_name_validation}/>
                    </div>
                    <Input {...email_validation}/>
                    <Input {...street_validation}/>
                    <div className="multi-fields">
                        <Input {...city_validation}/>
                        <Input {...state_validation}/>
                    </div>
                    <div className="multi-fields">
                        <Input {...zip_code_validation}/>
                        <Input {...country_validation}/>
                    </div>
                    <Input {...phone_validation}/>
                </div>
                <div className="place-order-right">
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
                                <p>{99} kr</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>{getTotalCartAmountWithDiscount()+99} kr</b>
                            </div>
                            <button onClick={onSubmit} className="place-order-btn">Place Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default PlaceOrder