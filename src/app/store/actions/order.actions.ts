import { Action, createAction, props } from '@ngrx/store';
import { PizzaOption } from '../../models/pizza-option.class';
import { ToppingOption } from '../../models/topping-option.class';
 
export enum ActionTypes {
    AddTopping = '[Pizza Order] Add Topping',
    RemoveTopping = '[Pizza Order] Remove Topping',
}

export const AddTopping = createAction(
    ActionTypes.AddTopping, 
    props<{ pizzaOption: PizzaOption, topping: ToppingOption }>())

export const RemoveTopping = createAction(
    ActionTypes.RemoveTopping, 
    props<{ pizzaOption: PizzaOption, topping: ToppingOption }>())
