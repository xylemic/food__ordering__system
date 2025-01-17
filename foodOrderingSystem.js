// define the Customer class
class Customer {
  static totalCustomers = 0;

  constructor(name, contactInfo) {
    this.customerId = ++Customer.totalCustomers;
    this.name = name;
    this.contactInfo = contactInfo;
    this.orders = []; // tracks orders placed by the customer
  }

  // method to place an order
  placeOrder(order) {
    this.orders.push(order);
    console.log(`${this.name} placed an order with ID: ${order.orderId}`);
  }

  // method to cancel an order
  cancelOrder(orderId) {
    const orderIndex = this.orders.findIndex(order => order.orderId === orderId);
    if (orderIndex !== -1) {
      const cancelledOrder = this.orders.splice(orderIndex, 1)[0];
      console.log(`${this.name} cancelled order with ID: ${cancelledOrder.orderId}`);
    } else {
      console.log(`Order with ID ${orderId} not found for ${this.name}`);
    }
  }
}

// define the Restaurant class
class Restaurant {
  static totalRestaurants = 0;

  constructor(name, address) {
    this.restaurantId = ++Restaurant.totalRestaurants;
    this.name = name;
    this.address = address;
    this.menu = []; // tracks items in the restaurant's menu
    this.orders = []; // track orders received
  }

  // method to add an item to the restaurant's menu
  addMenuItem(item) {
    this.menu.push(item);
    console.log(`${this.name} added ${item.name} to their menu`);
  }

  // method to receive an order
  receiveOrder(order) {
    this.orders.push(order);
    console.log(`${this.name} received an order with ID: ${order.orderId}`);
  }

  // method to get the current menu
  getMenu() {
    console.log(`${this.name}'s menu:`);
    this.menu.forEach(item => console.log(`- ${item.name}: ₦${item.price}`));
  }

  // method to get customer's order history
  getCustomerOrderHistory(customerId) {
    const customerOrders = this.orders.filter(order => order.customer.customerId === customerId);
    console.log(`${this.name}'s order history for customer ID: ${customerId}`);
    customerOrders.forEach(order => {
      console.log(`- Order ID: ${order.orderId}, Total: ₦${order.totalAmount}`);
    });
  }
}

// define the Item class
class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// define the Order class
class Order {
  static totalOrders = 0;

  constructor(customer, restaurant, items) {
    this.orderId = ++Order.totalOrders;
    this.customer = customer;
    this.restaurant = restaurant;
    this.items = items; // array of menuItem
    this.status = "Pending"; // order status
    this.totalAmount = items.reduce((sum, item) => sum + item.price, 0);
  }

  // method to update order status
  updateStatus(newStatus) {
    this.status = newStatus;
    console.log(`Order with ID: ${this.orderId} status updated to: ${this.status}`);
  }
}



