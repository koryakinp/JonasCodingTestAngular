import { createReducer, on } from "@ngrx/store";
import { AddTopping, RemoveTopping } from "../actions/order.actions";
import { initialOrderState } from "../states/order.state";
import { immerOn } from 'ngrx-immer/store';


export const orderReducers = createReducer(initialOrderState, 
    immerOn(AddTopping, (state, { pizzaOption, topping }) => {
        let pizza = state.order.find(q => q.pizzaOption.size === pizzaOption.size);
        if(pizza) {
            pizza.toppings.push(topping);
        } else {
            state.order.push({ pizzaOption: pizzaOption, toppings: [topping ]})
        }
        return state
    }),
    immerOn(RemoveTopping, (state, { pizzaOption, topping }) => {
        let pizza = state.order.find(q => q.pizzaOption.size === pizzaOption.size)!;
        pizza.toppings = pizza.toppings.filter(q => q.name !== topping.name);
        if(pizza.toppings.length === 0) {
            state.order = state.order.filter(q => q.pizzaOption.size !== pizza.pizzaOption.size)
        }
        return state
    })
);