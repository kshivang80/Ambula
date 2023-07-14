import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import { todoreducer } from "./todo/todoreducer";
//import { productreducer } from "./product/todoreducer";


const rootReducer = combineReducers({
    todo : todoreducer,
   // product:productreducer,
   
    
  
});
const store =legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}