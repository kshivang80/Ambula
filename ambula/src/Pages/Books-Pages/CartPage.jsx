import { useToast, Container,
    Box,
    chakra,
    Flex,
    VStack,
    HStack,
    Icon,
    Text,
    Button,
    IconButton,
    SimpleGrid,
    Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FaTrashAlt, FaArrowRight } from "react-icons/fa";
import { getCart } from '../../Redux/Cart/cartaction';

const CartPage = () => {

    const toast = useToast()
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart)
    const cartItems=cart.cart
    console.log(cart)


    useEffect(() => {
        if (cart.cart.length===0){
            dispatch(getCart())
        }
        
      }, [dispatch,cart.cart])

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>    
        <Box mt="30px">
    <Text fontSize="4xl" fontWeight="bold" color="teal">
      Cart
    </Text>

    <>
      {cartItems.length === 0 ? (
        <>Lol Nothing</>
      ) : (
        <SimpleGrid
          gridTemplateColumns={["1fr", "5fr 2fr"]}
           border="2px solid green"
          gap="4"
          p={2}
        >
          <Container maxW="5xl" p={{ base: 5, md: 10 }}>
            <Flex justify="left" mb={3}>
              <Text fontSize="3xl" fontWeight="bold" textAlign="center" fontFamily={"sans-serif"}>
                Total Item:{cart.cart.length}
              </Text>
            </Flex>
            <VStack
              border="1px solid"
              borderColor="gray.400"
              rounded="md"
              overflow="hidden"
              spacing={2}
              p={4}
            >
              {cartItems.map((el) => (
                <Box
                  key={el.id}
                  p={2}
                  display={"flex"}
                  justifyContent="space-between"
                  w="100%"
                  border="2px solid pink"
                  h="200px"
                >
                  <Box border="2px solid red" w="60%" display={"flex"} >
                    <Box  border="2px solid red" w="60%">
                      <Image w="100%" 
                      src={el.image} 
                      alt="product image"
                      h="100%"
                      width="100%"
                      />
                    </Box >
                    <Box border="2px solid green" w="40%">
                    <Text textAlign="left">{el.title}</Text>
                    </Box>
                   
                  </Box>
                  <Box   w="10%" border="2px solid black" h="100%" display={"flex"} justifyContent={"center"}  alignItems={"center"}>
                  <Text fontWeight="bold">{el.price}</Text>
                  </Box>
                  <Box   w="20%" border="2px solid black" h="100%" display={"flex"} justifyContent={"center"}  alignItems={"center"}>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<AddIcon />}
                    
                  />
                  <Text>hello</Text>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<MinusIcon />}
                   
                  />
                  </Box>
                

                  <Box  border="2px solid black" w="10%" display={"flex"} justifyContent={"center"}  alignItems={"center"}>
                  
                  <IconButton
                    colorScheme="red"
                    variant="outline"
                    aria-label="Call Segun"
                    size="lg"
                    icon={<FaTrashAlt />}
                   
                  />

                  </Box>
                
                </Box>
              ))}
            </VStack>
          </Container>
          {/* Order Summary Content */}
          <Container marginTop="5" p={{ base: 5, md: 10 }} borderRadius="md">
            <chakra.h3 fontSize="lg" fontWeight="bold" textAlign="left">
              Order Summary
            </chakra.h3>
            <VStack
              // margin="auto"
              p={1}
              justifyContent="center"
              alignContent="center"
            >
              <HStack width="full" justify="space-between">
                <Text>Subtotal</Text>
                <Text>{totalPrice}</Text>
              </HStack>
              <HStack width="full" justify="space-between">
                <Text>Shipping + Tax</Text>
                <Text>{totalPrice * 0.18}</Text>
              </HStack>
              <HStack width="full" justify="space-between">
                <Text>Total Quantity</Text>
                <Text>totalQuantity</Text>
              </HStack>
              <HStack
                fontWeight="bold"
                width="full"
                fontSize="lg"
                justify="space-between"
              >
                <Text>Total</Text>
                <Text>&#8377;{totalPrice + totalPrice * 0.18}</Text>
              </HStack>
              <Button
                bottom="0"
                marginTop="2"
                width="full"
                colorScheme="messenger"
              >
                Checkout &nbsp;
                <Icon as={FaArrowRight} color="white" />
              </Button>
            </VStack>
          </Container>
        </SimpleGrid>
      )}
    </>

   

    
  </Box>
  </div>
  )
}

export default CartPage