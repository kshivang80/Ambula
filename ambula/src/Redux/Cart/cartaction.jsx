
import * as types from "./cartactionTypes"
import axios from "axios"



const getCartRequest=()=>{

    return {
        type:types.GET_CART_REQUEST
    }

}

const getCartSucess=(payload)=>{

    return {
        type:types.GET_CART_SUCCESS,
        payload
    }

}


const getCartError=()=>{

    return {
        type:types.GET_CART_ERROR
    }

}

//////////////// delete Request  //////////////////

const deleteCartRequest=()=>{

    return {
        type:types.DELETE_CART_REQUEST
    }

}

const deleteCartSucess=(payload)=>{

    return {
        type:types.DELETE_CART_SUCCESS,
        payload
    }

}


const deleteCartError=()=>{

    return {
        type:types.DELETE_CART_ERROR
    }

}

///////// ADD TO CART ///////////



export const addToCartRequest=()=>{

    return {
        type: types.ADD_TO_CART_REQUEST,
    }

}

export const addToCartSuccess=(payload)=>{

    return {
        type: types.ADD_TO_CART_SUCCESS,
        payload,
    }

}


export const addToCartError=()=>{

    return {
        type: types.ADD_TO_CART_ERROR,
    }

}



/////////////////   Calling api /////////////////////


const getCart=()=>(dispatch)=>{
   dispatch(getCartRequest())

   return axios.get("https://book-api-epaa.onrender.com/cart")
     .then((r)=>{
        dispatch(getCartSucess(r.data))
        console.log(r.data)
     })
     .catch((err)=>{
        dispatch(getCartError())
        console.log(err)
     })


}

/// deltete Request

 const deleteCartProducts = (id) => (dispatch) => {
    dispatch(deleteCartRequest());
    return axios
    .delete(`https://book-api-epaa.onrender.com/cart/${id}`)
    .then((r)=>{
      dispatch(deleteCartSucess(r))
    })
    .catch((e)=>{
      dispatch(deleteCartError(e))
    })
  
  }


  ///////// ADD TO CART /////

  const addToCartCart=(payload)=>(dispatch)=>{
     
    dispatch(addToCartRequest())
 
    return axios.post("https://book-api-epaa.onrender.com/cart",payload)
      .then((r)=>{
         dispatch(addToCartSuccess(r.data))
         console.log(r.data)
      })
      .catch((err)=>{
         dispatch(addToCartError())
         console.log(err)
        
      })
 
 
 }



export {addToCartCart,getCart,deleteCartProducts }