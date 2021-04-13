import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // loop over each item in the order
  // calculate the total for that pizza
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((singleP) => singleP.id === singleOrder.id);
    // add that total to the running total
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
