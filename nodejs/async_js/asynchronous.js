let pizza;

// This is an asynchronous program.
// orderPizza() will not complete before eatPizza()
// We will eat an undefined pizza because orderPizza() is run asynchronously.
// This means, while orderPizza is still execuing, the program continues and calls eatPizza
// Now we are sad because we ate undefined.

const orderPizza = () => {
  setTimeout(() => {
    pizza = "🍕";
  }, 1000);
};

const eatPizza = (pizza) => {
  console.log(`eat ${pizza}`);
};

orderPizza();
eatPizza(pizza);