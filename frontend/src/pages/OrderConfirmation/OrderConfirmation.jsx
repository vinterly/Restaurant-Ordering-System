import React, { useContext, useEffect, useState } from "react"
import "./OrderConfirmation.css"
import { useLocation } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"

const OrderConfirmation = () => {

  const { menuItems, fetchOrderDetails } = useContext(StoreContext);
  const location = useLocation();
  const orderId = location.state?.orderId;

  const [orderDetails, setOrderDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails(orderId)
        .then(response => {
          setOrderDetails(response);
          setErrorMessage("");
        })
        .catch(error => {
          console.error("Error fetching order details:", error);
          setErrorMessage("Failed to fetch order details.");
        });
    }
  }, [orderId, fetchOrderDetails]);

  const renderMatchingMenuItems = () => {
    if (!orderDetails || !menuItems) return null;

    const orderItemIds = orderDetails.items.split(",").map(id => parseInt(id.trim(), 10));

    const matchingMenuItems = menuItems.filter(menuItem => orderItemIds.includes(menuItem.id));

    return matchingMenuItems.map(menuItem => (
      <div key={menuItem.id} className="order-item">
          <img src={"http://localhost:5173/src/assets/"+menuItem.imageFilename} alt={menuItem.name} />
          <p>{menuItem.name}</p>
          <p>{menuItem.price} kr</p>  
      </div>
    ));
  };

  if (errorMessage) {
    return <div className="error-message">{errorMessage}</div>;
  }

  return (
    <div>
      {orderDetails && (
        <div className="order-confirmation">
          <div className="order-confirmation-left">
            <h1>Thank you for your purchase!</h1>
          </div>
          <div className="order-confirmation-right">
            <h2>Order Summary</h2>
            <p>Order ID: {orderId}</p>
            <p>Created At: {orderDetails.createdAt}</p>
            <p>Status: {orderDetails.status}</p>
            <h3>Order Items</h3>
            {renderMatchingMenuItems()}
            <p className="total">Order Total: <span>{orderDetails.total} kr</span></p>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default OrderConfirmation