import * as types from "./todoationTypes"
import axios from "axios"


const getTodosRequest=()=>{

    return {
        type:types.GET_TODO_REQUEST
    }

}

const getTodosSucess=(payload)=>{

    return {
        type:types.GET_TODO_SUCCESS,
        payload
    }

}


const getTodosError=()=>{

    return {
        type:types.GET_TODO_ERROR
    }

}


//////////  POST REQUEST  //////////////////

const postTodosRequest=()=>{

    return {
        type:types.POST_TODO_REQUEST
    }

}

const postTodosSucess=(payload)=>{

    return {
        type:types.POST_TODO_SUCCESS,
        payload
    }

}


const postTodosError=()=>{

    return {
        type:types.POST_TODO_ERROR
    }

}

/////////////////   patch request /////////////

const getSingleTodosRequest = (user) => ({
    type: types.GET_SINGLE_TODO,
    payload: user,
  });

const updateTodosRequest=()=>{

    return {
        type:types.EDIT_TODO_REQUEST
    }

}






//////////////// delete Request  //////////////////

const deleteTodosRequest=()=>{

    return {
        type:types.DELETE_TODO_REQUEST
    }

}

const deleteTodosSucess=(payload)=>{

    return {
        type:types.DELETE_TODO_SUCCESS,
        payload
    }

}


const deleteTodosError=()=>{

    return {
        type:types.DELETE_TODO_ERROR
    }

}


/////////////////   Calling api /////////////////////


const getTodos=()=>(dispatch)=>{
   dispatch(getTodosRequest())

   return axios.get("http://localhost:8080/todos")
     .then((r)=>{
        dispatch(getTodosSucess(r.data))
        console.log(r.data)
     })
     .catch((err)=>{
        dispatch(getTodosError())
        console.log(err)
     })


}


//Post Request

const postTodos=(payload)=>(dispatch)=>{
    dispatch(postTodosRequest())
 
    return axios.post(" http://localhost:8080/todos",payload)
      .then((r)=>{
         dispatch(postTodosSucess(r.data))
         console.log(r.data)
      })
      .catch((err)=>{
         dispatch(postTodosError())
         console.log(err)
      })
 
 
 }

 // get single Todos 

  const getSingleTodos = (id) =>  (dispatch) =>{
      
   return axios
        .get(`http://localhost:8080/todos/${id}`)
        .then((res) => {
          console.log(res.data);
          dispatch(getSingleTodosRequest(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  

 //update request

 const updateTodos=(Todos,id)=>(dispatch)=>{
        
   return axios.patch(` http://localhost:8080/todos/${id}`,Todos)
    .then((res)=>{
        console.log(res.data);
        dispatch(updateTodosRequest())
    })
    .catch((err)=>{
        console.log(err)
    })
 }





 /// deltete Request

 const deleteTodos = (id) => (dispatch) => {
    dispatch(deleteTodosRequest());
    return axios
    .delete(` http://localhost:8080/todos/${id}`)
    .then((r)=>{
      dispatch(deleteTodosSucess(r))
    })
    .catch((e)=>{
      dispatch(deleteTodosError(e))
    })
  
  }



export {getTodos ,postTodos ,updateTodos,deleteTodos,getSingleTodos,postTodosError,postTodosRequest,postTodosSucess}