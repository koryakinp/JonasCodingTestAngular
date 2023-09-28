import { createSelector } from "@ngrx/store";
import { PizzaOffer } from "src/app/models/pizza-offer.class";
import { PizzaOption } from "src/app/models/pizza-option.class";
import { IAppState } from "../states/app.state";
import { IOrderState } from "../states/order.state";

export const orderFeature = (state: IAppState) => state.order;

export const selectOfferForPizza = createSelector(
    orderFeature,
    (state: IOrderState, pizzaOption: PizzaOption): PizzaOffer => {
        let pizza = state.order.find(q => q.pizzaOption.size === pizzaOption.size);

        if(!pizza) {
            return { name: '', regularPrice: 0, discounterPrice: 0, hasDiscount: false };
        }

        if(pizza.pizzaOption.size === 'Medium' && pizza.toppings.length >= 4) {
            return { 
                name: 'Offer 2', 
                regularPrice: getTotal(state, pizzaOption), 
                discounterPrice: 9,
                hasDiscount: true
            }
        } else if(pizza.pizzaOption.size === 'Medium' && pizza.toppings.length >= 2) {
            return { 
                name: 'Offer 1', 
                regularPrice: getTotal(state, pizzaOption), 
                discounterPrice: 4,
                hasDiscount: true
            }
        } else if(pizza.pizzaOption.size === 'Large' && pizza.toppings.map(q => q.discountWeight).reduce((q,w) => q += w) >= 4) {
            
            let total = getTotal(state, pizzaOption);
            return { 
                name: 'Offer 3', regularPrice: 
                total, 
                discounterPrice: total / 2,
                hasDiscount: true
            }
        }

        return { name: '', regularPrice: getTotal(state, pizzaOption), discounterPrice: 0, hasDiscount: false };
    }
);

function getTotal(state: IOrderState, pizzaOption: PizzaOption) {
    let pizza = state.order.find(q => q.pizzaOption.size === pizzaOption.size);
    if(!pizza) {
        return 0;
    }
    return pizza.pizzaOption.price + pizza.toppings.reduce((q,w) => q + w.price, 0);
}