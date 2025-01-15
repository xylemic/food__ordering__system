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

// demonstration
// create a restaurant
const restaurant = new Restaurant('Tasty Bites', '123 yaba road');

// add menu items
const burger = new MenuItem('Burger', 750.55);
const pizza = new MenuItem('Pizza', 550.99);
restaurant.addMenuItem(burger);
restaurant.addMenuItem(pizza);

// create a customer
const customer = new Customer('amaka', 'amaka@example.com');

// view restaurant's menu
restaurant.getMenu();

// place an order
const order = new Order(customer, restaurant, [burger, pizza]);
customer.placeOrder(order);
restaurant.receiveOrder(order);

// update order status
order.updateStatus('Completed');

// display customer and restaurant information
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Email: ${customer.contactInfo}`);
console.log(`Restaurant Name: ${restaurant.name}`);
console.log(`Restaurant Address: ${restaurant.address}`);

// view customer's orders
console.log(`${customer.name}'s orders:`);
customer.orders.forEach(order => {
  console.log(`- Order ID: ${order.orderId}`);
  console.log(`  Status: ${order.status}`);
  console.log(`  Total Amount: ₦${order.totalAmount}`);
  console.log(`  Items:`);
  order.items.forEach(item => console.log(`    - ${item.name}: ₦${item.price}`));
});

console.log('----------------------');

// // view customer order history
// console.log(`${customer.name}'s order history:`);
// customer.orders.forEach(order => {
//   console.log(`- Order ID: ${order.orderId}`);
//   console.log(`  Status: ${order.status}`);
//   console.log(`  Total Amount: ₦${order.totalAmount}`);
//   console.log(`  Items:`);
//   order.items.forEach(item => console.log(`    - ${item.name}: ₦${item.price}`));
// });

// view customer's order history
restaurant.getCustomerOrderHistory(customer.customerId);

