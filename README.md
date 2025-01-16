# Title: Online Food Ordering System

## Problem Domain Description
This repository contains an implementation of an Online Food Ordering System in JavaScript. The project demonstrates object-oriented programming concepts by modeling a real-world food ordering scenario where customers can place an orders at restaurants, view menus, and manage orders. The system is implemented as a console-based application and includes functionality for customers, restaurants, menu items, and orders.

## Features

### Classes and Their Functionalities

#### 1. **Customer**
- Attributes:
  - `customerId`: Unique identifier for each customer.
  - `name`: Name of the customer.
  - `contactInfo`: Contact details of the customer.
  - `orders`: Array to track orders placed by the customer.
- Methods:
  - `placeOrder(order)`: Places an order for the customer.
  - `cancelOrder(oderId)`: Cancels a specific order based on its ID.

#### 2. **Restaurant**
- Attributes:
  - `restaurantId`: Unique identifier for each restaurant.
  - `name`: Name of the restaurant.
  - `address`: Address of the restaurant.
  - `menu`: Array to store the restaurant's menu items.
  - `orders`: Array to track orders received by the restaurant.
- Methods:
  - `addMenuItem(item)`: Adds a new item to the restaurant's menu.
  - `receiveOrder(order)`: Processes and stores an order.
  - `getMenu()`: Displays the restaurant's menu.
  - `getCustomerOrderHistory(customerId)`: Displays the order history of a specific customer by their ID.

#### 3. **MenuItem**
- Attributes:
  - `name`: Name of the menu item.
  - `price`: Price of the menu item.

#### 4. **Order**
- Attributes:
  - `orderId`: Unique identifier for each order.
  - `customer`: The customer who placed the order.
  - `restaurant`: The restaurant receiving the order.
  - `items`: Array of menu items included in the order.
  - `status`: Status of the order (e.g., "Pending", "Completed").
  - `totalAmount`: Total price of the order.
- Methods:
  - `updatedStatus(newStatus)`: Updates the status of the order.

### Example Usage

1. Create a restaurant:
   ```javascript
   const restaurant = new Restaurant('Tasty Bites', '123 Yaba Road');
   ```

2. Add menu items:
   ```javascript
   const burger = new MenuItem('Burger', 750.55);
   const pizza = new MenuItem('Pizza', 550.99);
   restaurant.addMenuItem(burger);
   restaurant.addMenuItem(pizza);
   ```

3. Create a customer:
   ```javascript
   const customer = new Customer('Amaka', 'amaka@example.com');
   ```

4. Place an order:
   ```javascript
   const order = new Order(customer, restaurant, [burger, pizza]);
   customer.placeOrder(order);
   restaurant.receiveOrder(order);
   ```

5. Update order status:
   ```javascript
   const order.updateStatus('Completed');
   ```

6. View menu and order history:
   ```javascript
   restaurant.getMenu();
   restaurant.getCustomerOrderHistory(customer.customerId);
   ```
