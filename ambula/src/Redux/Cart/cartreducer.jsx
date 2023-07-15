
import * as types from "./cartactionTypes"


const initalState = {
    cart: [],
    isLoading: false,
    isError: false,
}


export const cartreducer = (state = initalState, action) => {

    const { type, payload } = action;

    switch (type) {
  
        // For get Request Code
        case types.GET_CART_REQUEST:
            return { ...state, isLoading: true }

        case types.GET_CART_SUCCESS:
            return { ...state, isLoading: false, cart: payload }

        case types.GET_CART_ERROR:
            return { ...state, isLoading: false, isError: true }


         // for Cart Request

        case types.ADD_TO_CART_REQUEST:
            return { ...state, isLoading: true,isError: false }

        case types.ADD_TO_CART_SUCCESS:
        
            return { ...state, isLoading: false,isError: false, cart: [...state.cart, payload] }

          case types.ADD_TO_CART_ERROR:
            return { ...state, isLoading: false, isError: true }
        


        default:
            return state
    }

}
