function fetchUser(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetched user with ID: ${userId}`);
        resolve({ userId: userId, name: 'John Doe' });
      }, 1000);
    });
  }
  
  function fetchOrders(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetched orders for user with ID: ${userId}`);
        resolve([{ orderId: 1 }, { orderId: 2 }]);
      }, 1000);
    });
  }
  
  function fetchOrderDetails(orderId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetched details for order ID: ${orderId}`);
        resolve({ orderId: orderId, product: 'Laptop' });
      }, 1000);
    });
  }
  
  // Promise-based approach
  fetchUser(1)
    .then((user) => fetchOrders(user.userId))
    .then((orders) => fetchOrderDetails(orders[0].orderId))
    .then((orderDetails) => {
      console.log(`Order details:`, orderDetails);
    });
  