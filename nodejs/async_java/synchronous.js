// All the code here is run sequentially, one after the other.
// Each line of code must complete before the next line can be run.

let pizza;

const orderPizza = () => {
  pizza = "🍕";
  console.log(`ordered the pizza: ${pizza}`);
};

const eatPizza = (pizza) => {
  console.log(`eat ${pizza}`);
};

orderPizza();
eatPizza(pizza);
