import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {musiciansReducer} from "../reducers/musiciansReducer";

const reducer = combineReducers({
    musicians: musiciansReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))