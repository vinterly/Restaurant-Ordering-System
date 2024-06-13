import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [menuItems, setMenuItems] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:5000";

    const addToCart = (itemId) => {

        if (!cartItems[itemId]) {
            setCartItems(prev => ({...prev, [itemId]: 1}));
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }
        

    }

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = menuItems.find(menuItem => menuItem.id.toString() === item.toString());
                if (!itemInfo) {
                    console.log(`No item found for ID: ${item}`);
                    continue;
                }
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const fetchMenuItems = async () => {
        try {
            const response = await axios.get(url+"/menu");
            setMenuItems(response.data.menuItems);
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await fetchMenuItems();
        }
        loadData();
    }, []);

    const contextValue = {
        menuItems,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={{contextValue, menuItems, cartItems, addToCart, removeFromCart, getTotalCartAmount}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;