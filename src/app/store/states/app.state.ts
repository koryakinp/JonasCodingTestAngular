import { initialOrderState, IOrderState } from "./order.state"

export interface IAppState {
    order: IOrderState
}

export const initialAppState: IAppState = {
    order: initialOrderState
}

export function getInitialAppState(): IAppState {
    return initialAppState;
}