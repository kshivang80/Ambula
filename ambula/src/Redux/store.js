import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import { todoreducer } from "./todo/todoreducer";
import { bookreducer } from "./product/bookreducer";
import { cartreducer } from "./Cart/cartreducer";


const rootReducer = combineReducers({
    todo : todoreducer,
    product:bookreducer,
    cart:cartreducer
    
  
});
const store =legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}