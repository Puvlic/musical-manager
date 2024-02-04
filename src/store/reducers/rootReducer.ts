import {musiciansReducer} from "../reducers/musiciansReducer";
import {combineReducers} from "redux";

export const RootReducer = combineReducers({
    musicians: musiciansReducer
})

export type RootState = ReturnType<typeof RootReducer>