import { useToast,Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {

    const toast = useToast()
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart)
    const cartItems=cart.cart

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>    
        <Box mt="30px">
    <Text fontSize="4xl" fontWeight="bold" color="teal">
      Cart
    </Text>

    <Box mt="30px" border="1px solid red" w="100%" h="200px">

    </Box>

   

    
  </Box>
  </div>
  )
}

export default CartPage