function fetchUser(userId, callback) {
    setTimeout(() => {
      console.log(`Fetched user with ID: ${userId}`);
      callback({ userId: userId, name: 'John Doe' });
    }, 1000);
  }
  
  function fetchOrders(userId, callback) {
    setTimeout(() => {
      console.log(`Fetched orders for user with ID: ${userId}`);
      callback([{ orderId: 1 }, { orderId: 2 }]);
    }, 1000);
  }
  
  function fetchOrderDetails(orderId, callback) {
    setTimeout(() => {
      console.log(`Fetched details for order ID: ${orderId}`);
      callback({ orderId: orderId, product: 'Laptop' });
    }, 1000);
  }
  
  // Example of callback hell
  fetchUser(1, (user) => {
    fetchOrders(user.userId, (orders) => {
      fetchOrderDetails(orders[0].orderId, (orderDetails) => {
        console.log(`Order details:`, orderDetails);
      });
    });
  });
  