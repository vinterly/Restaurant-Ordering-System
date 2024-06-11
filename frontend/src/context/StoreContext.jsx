import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([])
    const url = "http://localhost:5000"
    const [menu_items, setMenuItems] = useState([])

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({...prev, [itemId]: 1}))
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = menu_items.find(menuItem => menuItem._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    useEffect(() => {
        axios.get(`/menu`)
            .then(response => setMenuItems(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const contextValue = {
        menu_items,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={{contextValue, menu_items, addToCart, removeFromCart, getTotalCartAmount}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;