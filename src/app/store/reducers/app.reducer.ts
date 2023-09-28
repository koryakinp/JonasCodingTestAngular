import { ActionReducerMap } from "@ngrx/store";
import { orderReducers } from "./order.reducer";
import { IAppState } from "./../states/app.state";

export const appReducers: ActionReducerMap<IAppState, any> = {
    order: orderReducers
}