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

1. Install the required packages for frontend
    ```bash
        cd ../frontend
        npm install
    ```
    
1. Run the backend server
    ```bash
        cd ../backend
        python main.py
    ```
    
2. Run the frontend server
    ```bash
        cd ../frontend
        npm start dev
    ``` 
    

# Screenshots

## Home page
![home](/Screenshots/home_page.png "Home page")

## Menu
![menu](/Screenshots/menu2.png "Menu")

## Cart
![cart](/Screenshots/cart.png "Cart")

## Cart with discount applied
![cart_with_discount](/Screenshots/cart_with_discount.png "Cart with discount applied")

## Place order form with input validation
![order_form](/Screenshots/place_order_with_validation.png "Place order form with input validation")

## Order confirmation
![order](/Screenshots/order_confirmation.png "Order confirmation")