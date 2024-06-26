import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [menuItems, setMenuItems] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:8080";
    const discountPercentage = 0.1;
    const deliveryFee = 99;

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({...prev, [itemId]: 1}));
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        }
    };

    const calculateAllItemsAreHot = () => {
        return Object.keys(cartItems).length > 0 && Object.keys(cartItems).every(itemId => {
            const item = menuItems.find(menuItem => menuItem.id.toString() === itemId.toString());
            return item && item.isHot;
        });
    };

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

    const getHotDiscount = () => {  
        const totalAmount = getTotalCartAmount();
        const allItemsAreHot = calculateAllItemsAreHot();
        const hotDiscount = allItemsAreHot ? totalAmount * discountPercentage : 0;
        return hotDiscount;
    };

    const getTotalCartAmountWithDiscount = () => {
        const totalAmount = getTotalCartAmount();
        const hotDiscount = getHotDiscount();
        return totalAmount - hotDiscount;
    };

    const fetchMenuItems = async () => {
        try {
            const response = await axios.get(url+"/menu");
            setMenuItems(response.data.menuItems);
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };
    
    const placeOrder = async (orderData) => {
        try {
            const response = await axios.post(url + "/order", orderData);
            return response.data;
        } catch (error) {
            console.error("Error placing order:", error);
            throw error;
        }
    };

    const fetchOrderDetails = async (orderId) => {
        try {
            const response = await axios.get(url + "/order/" + orderId);
            return response.data;
        } catch (error) {
            console.error("Error fetching order details:", error);
            throw error;
        }
    }

    useEffect(() => {
        const loadData = async () => {
            await fetchMenuItems();
        }
        loadData();
    }, []);

    const contextValue = {
        menuItems,
        cartItems,
        deliveryFee,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        calculateAllItemsAreHot,
        getTotalCartAmountWithDiscount,
        getHotDiscount,
        placeOrder,
        fetchOrderDetails,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;