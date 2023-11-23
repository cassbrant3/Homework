let pizzaToppings = ["Mushrooms", "Bacon", "Sausage", "Green peppers"];

function greetCustomer() {
  for (let topping of pizzaToppings);
  console.log(
    `Welcome to Yummy-Yummy Pizza, our toppings are: ` + pizzaToppings
  );
}
let pizzaOrder = ["Large", "thin", ...pizzaToppings];
function getPizzaOrder(size, crust, ...pizzaToppings) {
  for (let topping in pizzaOrder) {
    console.log(
      "One" + pizzaOrder[0],
      pizzaOrder[1],
      "crust pizza with" + pizzaOrder[3] + "coming up!"
    );
  }
}
const Pizza = {
  size: "Large",
  crust: "thin",
  toppings: pizzaToppings
};
function preparePizza() {
  pizzaOrder = ["Large", "thin", pizzaToppings];
  console.log("...Pizza cooking...");
}

function servePizza(Pizza) {
  console.log(
    "Order up! Here's your" +
      pizzaOrder[0] +
      pizzaOrder[1] +
      "crust pizza with" +
      pizzaOrder[3],
    "Enjoy!"
  );
}
greetCustomer(pizzaToppings);
getPizzaOrder(pizzaOrder);
preparePizza(getPizzaOrder);
servePizza(preparePizza);
