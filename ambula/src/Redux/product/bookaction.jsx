import * as types from "./bookactionTypes"
import axios from "axios"

const getBooksRequest=()=>{

    return {
        type:types.GET_BOOKS_REQUEST
    }

}

const getBooksSucess=(payload)=>{

    return {
        type:types.GET_BOOKS_SUCCESS,
        payload
    }

}


const getBooksError=()=>{

    return {
        type:types.GET_BOOKS_ERROR
    }

}


//////////  POST REQUEST  //////////////////

const postBooksRequest=()=>{

    return {
        type:types.POST_BOOKS_REQUEST
    }

}

const postBooksSucess=(payload)=>{

    return {
        type:types.POST_BOOKS_SUCCESS,
        payload
    }

}


const postBooksError=()=>{

    return {
        type:types.POST_BOOKS_ERROR
    }

}

/////////////////   patch request /////////////

const getSingleBooksRequest = (user) => ({
    type: types.GET_SINGLE_BOOKS,
    payload: user,
  });

const updateBooksRequest=()=>{

    return {
        type:types.EDIT_BOOKS_REQUEST
    }

}






//////////////// delete Request  //////////////////

const deleteBooksRequest=()=>{

    return {
        type:types.DELETE_BOOKS_REQUEST
    }

}

const deleteBooksSucess=(payload)=>{

    return {
        type:types.DELETE_BOOKS_SUCCESS,
        payload
    }

}


const deleteBooksError=()=>{

    return {
        type:types.DELETE_BOOKS_ERROR
    }

}

///////// ADD TO CART ///////////





/////////////////   Calling api /////////////////////


const getBooks=()=>(dispatch)=>{
   dispatch(getBooksRequest())

   return axios.get("https://book-api-epaa.onrender.com/books")
     .then((r)=>{
        dispatch(getBooksSucess(r.data))
        console.log(r.data)
     })
     .catch((err)=>{
        dispatch(getBooksError())
        console.log(err)
     })


}


//Post Request

const postBooks=(payload)=>(dispatch)=>{
    dispatch(postBooksRequest())
 
    return axios.post("https://book-api-epaa.onrender.com/books",payload)
      .then((r)=>{
         dispatch(postBooksSucess(r.data))
         console.log(r.data)
      })
      .catch((err)=>{
         dispatch(postBooksError())
         console.log(err)
      })
 
 
 }

 // get single books 

  const getSingleBooks = (id) =>  (dispatch) =>{
      
   return axios
        .get(`https://book-api-epaa.onrender.com/books/${id}`)
        .then((res) => {
          console.log(res.data);
          dispatch(getSingleBooksRequest(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  

 //update request

 const updateBooks=(books,id)=>(dispatch)=>{
        
   return axios.patch(`https://book-api-epaa.onrender.com/books/${id}`,books)
    .then((res)=>{
        console.log(res.data);
        dispatch(updateBooksRequest())
    })
    .catch((err)=>{
        console.log(err)
    })
 }





 /// deltete Request

 const deleteProducts = (id) => (dispatch) => {
    dispatch(deleteBooksRequest());
    return axios
    .delete(`https://book-api-epaa.onrender.com/books/${id}`)
    .then((r)=>{
      dispatch(deleteBooksSucess(r))
    })
    .catch((e)=>{
      dispatch(deleteBooksError(e))
    })
  
  }






export {getBooks ,postBooks ,updateBooks,deleteProducts,getSingleBooks,postBooksError,postBooksRequest,postBooksSucess}