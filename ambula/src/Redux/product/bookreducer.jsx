
import * as types from "./bookactionTypes"


const initalState = {
    books: [],
    singlebook:{},
    isLoading: false,
    isError: false,
}


export const bookreducer = (state = initalState, action) => {

    const { type, payload } = action;

    switch (type) {
  
        // For get Request Code
        case types.GET_BOOKS_REQUEST:
            return { ...state, isLoading: true }

        case types.GET_BOOKS_SUCCESS:
            return { ...state, isLoading: false, books: payload }

        case types.GET_BOOKS_ERROR:
            return { ...state, isLoading: false, isError: true }

        // for Post code
        case types.POST_BOOKS_REQUEST:
            return { ...state, isLoading: true }

        case types.POST_BOOKS_SUCCESS:
            return { ...state, isLoading: false, books: [...state.books, payload] }

        case types.POST_BOOKS_ERROR:
            return { ...state, isLoading: false, isError: true }

        // For Update Book Request
          case types.EDIT_BOOKS_REQUEST:
              return {...state,isLoading:false}


        // For Single Book REquest
         case types.GET_SINGLE_BOOKS:
            return {...state,singlebook:payload,isLoading:false}

         

        


        default:
            return state
    }

}
