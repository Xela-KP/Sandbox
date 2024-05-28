let pizza;

// This is an example of a callback.
// Although all the code is run synchronously, by definition this is a callback.
// This code runs the exact same way that sycnhronous.js runs.
// Since all the code here is still synchronous, we must wait for orderPizza and eatPizza to complete before calling Tim

const orderPizza = (callback) => {
  pizza = "🍕";
  console.log(`ordered the pizza: ${pizza}`);
  callback(pizza);
};

const eatPizza = (pizza) => {
  console.log(`eat the pizza: ${pizza}`);
};

orderPizza(eatPizza);
console.log("Call Timothy");

// Callbacks are useful when we use asynchronous code with them.
// Here, setTimeout is asynchronous. It executes off of the main thread so that the program can continue while setTimeout is executing.
// The callback eatPizza is called after setTimeout completes.
// Since setTimeout is asynchronous, we can call Sydney while waiting for orderPizza and eatPizza complete.

const orderPizza2 = (callback) => {
  setTimeout(() => {
    pizza = "🍕🍕🍕";
    console.log(`ordered the pizza: ${pizza}`);
    callback(pizza);
  }, 2000);
};

orderPizza2(eatPizza);
console.log("Call Sydney");
