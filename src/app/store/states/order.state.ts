import { PizzaOption } from "src/app/models/pizza-option.class";
import { ToppingOption } from "src/app/models/topping-option.class";

export interface IOrder {
    pizzaOption: PizzaOption,
    toppings: ToppingOption[]
}

export interface IOrderState {
    order: IOrder[]
}

export const initialOrderState: IOrderState = {
    order: []
}