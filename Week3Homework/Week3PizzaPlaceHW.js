const pizzaToppings = ["Mushrooms", "Bacon", "Sausage", "Green peppers"];

function greetCustomer() {
  let toppingsList = "";
  for (let i = 0; i < pizzaToppings.length; i++) {
    toppingsList += pizzaToppings[i];
    if (i < pizzaToppings.length - 1) {
      toppingsList += ", ";
    }
  }
  console.log(
    `Welcome to Yummy-Yummy Pizza, our toppings are: ${toppingsList}!`
  );
}

function getPizzaOrder(size = "large", crust = "thin", ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${pizzaToppings} coming up!`);
  return size, crust, toppings;
}
let pizzaObj = {
  size: "Large",
  crust: "thin",
  toppings: pizzaToppings
};
function preparePizza(size, crust, toppings) {
  console.log("...Cooking pizza...");
  return pizzaObj;
}
function servePizza() {
  console.log(
    `Order up! Here's your ${pizzaObj.size}, ${pizzaObj.crust} pizza with ${pizzaObj.toppings} Enjoy!`
  );
}
greetCustomer(pizzaToppings);
getPizzaOrder();
preparePizza(getPizzaOrder);
servePizza(preparePizza);
