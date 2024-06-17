# Restaurant-Ordering-System

A simple restaurant ordering system that allows customers to order food from a restaurant. The system allows customers to view the menu, add items to the cart, and place an order. 

## Features
 
- Frontend with React
- Backend with Flask and SQLAlchemy
- Users can view the menu, add items to the cart, and place an order
- Responsive design
- Discount applied to hot/spicy items
- Input validation

## Future Features

- User authentication
- Admin panel to manage the menu and orders
- Migrate database to a more scalable solution like PostgreSQL
- Expand the database schema to include CartItem and OrderItem tables
- Order details correctly displays items with quantity
- Fix bug where hot/spicy discount is not updated correctly when adding and removing items from cart
- Complete input validation (phone number, etc)

# Setup

## Prerequisites

- Python
- Node.js
- Git

## Steps to run locally

1. Clone the repository
2. Install the required packages for backend
  ```bash
    cd backend
    pip install -r requirements.txt
    ```
3. Install the required packages for frontend
  ```bash
    cd ../frontend
    npm install
    ```
4. Run the backend server
    ```bash
        cd ../backend
        python main.py
    ```
5. Run the frontend server
    ```bash
        cd ../frontend
        npm start dev
    ```

# Screenshots

![home] (screenshots/home.png)
Home page

![menu] (screenshots/menu2.png)
Menu

![cart] (screenshots/cart.png)
Cart page

![cart_with_discount] (screenshots/cart_with_discount.png)
Cart page with discount applied

![order_form] (screenshots/place_order_with_validation.png)
Place order form with input validation

![order] (screenshots/order_confirmation.png)
Order confirmation page with order summary