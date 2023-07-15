import React, { useEffect } from 'react'
//import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  deleteProducts, getBooks } from "../../Redux/product/bookaction"
import { Box, Button, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { addToCartCart, getCart } from '../../Redux/Cart/cartaction'

const Books = () => {
  //const [data,setData] =useState([])
  const toast = useToast()
  const dispatch = useDispatch()
  const product = useSelector((store) => store.product)
  const cart = useSelector((store) => store.cart)

  //console.log(cart.cart)


  useEffect(() => {
    if (cart.cart.length===0){
        dispatch(getCart())
    }
    if (product.books.length   === 0) {
      dispatch(getBooks())
    }
  }, [dispatch, product.books])



const handleAddToCart = async (book) => {

// Check if the book already exists in the cart
  const bookExists = cart.cart.find((item) => item.id === book.id);
  if (bookExists) {
    toast({
      title: 'Failed to add',
      description: `${book.title} is already in your cart.`,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
    return; // Stop execution if the book already exists in the cart
  }

    try{
        dispatch(addToCartCart(book,toast));
        toast({
          title: 'Item added to cart',
          description: `${book.title} has been added to your cart.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: "top"
        });

    }catch(err){
         console.log(err)
        toast({
          title: 'Failed to add',
          description: `${book.title} Unsucessfull.`,
          status: 'Error',
          duration: 3000,
          isClosable: true,
          position: "top"
        });

    }
   
  };



  return (
    <div>

      <Box mt="30px">
      <Text  fontSize={"4xl"} as="b" color="teal">
         Books-Section
       </Text>

      </Box>

      
      <Box w="97%" mt="50px" h="auto" m="auto" paddingBottom={"100px"}>

        <SimpleGrid mt="30px" columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap="30px">
          {
            product.books.length > 0 &&
            product.books.map((ele, i) => {
              return (
                <Box key={ele.id} h="570px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"20px"} >
                  <Box h="58%" >
                    <Image paddingTop={"15px"} src={ele.image} w="90%" h="100%" m="auto" borderRadius={"10px"} />
                  </Box>
                  <Box h="31%" w="90%" m="auto" textAlign={"left"}  >
                    <Text mt="10px" fontSize="xl" noOfLines='1' as="b">Title : {ele.title}</Text>

                    <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Author : {ele.author}</Text>
                    <Text fontWeight={"500"} fontSize="lg">Year : {ele.year}</Text>
                    <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Publish : {ele.publish}</Text>
                    <Text fontWeight={"500"} fontSize="lg">ISBN : {ele.ISBN}</Text>
                    <Text fontWeight={"500"} fontSize="lg">Price : {ele.price}</Text>

                  </Box>
                  <Box w="90%" m='auto' h="10%"  >
                    <Box w="90%" m="auto" h="100%" display="flex">
                      {/* <Box w="50%" h="auto" >
                        
                       
                      </Box>
                      <Box w="50%" h="auto" >
                        
                        
                      </Box> */}
                      <Button w="100%" colorScheme='whatsapp' onClick={() => handleAddToCart(ele)}>
                        Add to Cart
                      </Button>

                    </Box>

                  </Box>





                </Box>
              )
            })
          }
        </SimpleGrid>

      </Box>
    </div>
  )
}

export default Books