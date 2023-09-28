import { PizzaOption } from "./models/pizza-option.class"
import { ToppingOption } from "./models/topping-option.class"

export const allPizzaOptions: PizzaOption[] = [
    { size: 'Small', price: 5 },
    { size: 'Medium', price: 7 },
    { size: 'Large', price: 8 },
    { size: 'Extra Large', price: 9 },
  ]

export const allToppingOptions: ToppingOption[] = [
    { name: 'Sausage', price: 1, discountWeight: 1, isVegan: false },
    { name: 'Pepperoni', price: 2, discountWeight: 2, isVegan: false },
    { name: 'Barbeque Chicken', price: 3, discountWeight: 2, isVegan: false },
    { name: 'Tomatos', price: 1, discountWeight: 1, isVegan: true },
    { name: 'Onion', price: 0.5, discountWeight: 1, isVegan: true },
    { name: 'Bell Pepper', price: 1, discountWeight: 1, isVegan: true },
    { name: 'Mushrooms', price: 1.2, discountWeight: 1, isVegan: true },
    { name: 'Pineapple', price: 0.75, discountWeight: 1, isVegan: true },
  ]