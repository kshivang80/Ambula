
import * as types from "./todoationTypes"


const initalState = {
    todos: [],
    singletodo:{},
    isLoading: false,
    isError: false,
}


export const todoreducer = (state = initalState, action) => {

    const { type, payload } = action;

    switch (type) {
  
        // For get Request Code
        case types.GET_TODO_REQUEST:
            return { ...state, isLoading: true }

        case types.GET_TODO_SUCCESS:
            return { ...state, isLoading: false, todos: payload }

        case types.GET_TODO_ERROR:
            return { ...state, isLoading: false, isError: true }

        // for Post code
        case types.POST_TODO_REQUEST:
            return { ...state, isLoading: true }

        case types.POST_TODO_SUCCESS:
            return { ...state, isLoading: false, todos: [...state.todos, payload] }

        case types.POST_TODO_ERROR:
            return { ...state, isLoading: false, isError: true }

        // For Update Book Request
          case types.EDIT_TODO_REQUEST:
              return {...state,isLoading:false}


        // For Single Book REquest
         case types.GET_SINGLE_TODO:
            return {...state,singletodo:payload,isLoading:false}
        


        default:
            return state
    }

}
