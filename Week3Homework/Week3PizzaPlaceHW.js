const pizzaToppings = ["Mushrooms", "Bacon", "Sausage", "Green peppers"];

function greetCustomer() {
  let toppingsList = "";
  for (let i = 0; i < pizzaToppings.length; i++) {
    toppingsList += pizzaToppings[i];
    if (i < pizzaToppings.length - 1) {
      toppingsList += "&";
    }
  }
  console.log(
    `Welcome to Yummy-Yummy Pizza, our toppings are: ${toppingsList}!`
  );
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming up!`);
  return size, crust, toppings;
}

function preparePizza(size, crust, toppings) {
  console.log("...Cooking pizza...");
  let pizzaObj = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaObj;
}
function servePizza(pizzaObj) {
  console.log(
    `Order up! Here's your ${pizzaObj.size}, ${pizzaObj.crust} pizza with ${pizzaObj.toppings} Enjoy!`
  );
}

greetCustomer(pizzaToppings);
getPizzaOrder("large", "thin", "sausage", "mushrooms", "bacon");
preparePizza(getPizzaOrder);
servePizza(preparePizza);
