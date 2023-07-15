import {
  useToast, Container,
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
  Image,
  Avatar
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FaTrashAlt, FaArrowRight } from "react-icons/fa";
import { deleteCartProducts, getCart } from '../../Redux/Cart/cartaction';
import Loader from '../../Components/Loader';

const CartPage = () => {

  const toast = useToast()
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart)
  const [quantities, setQuantities] = useState({})
  const cartItems = cart.cart
  console.log(cart)
  console.log(cart.isLoading)


  useEffect(() => {
    if (cart.cart.length === 0) {
      dispatch(getCart())
    }

    // Initialize quantities when cart changes
    const initialQuantities = {};
    cart.cart.forEach((item) => {
      initialQuantities[item.id] = 1; // Assuming initial quantity is 1 for all items
    });
    setQuantities(initialQuantities);



  }, [dispatch,])

  //const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);



  const deleteHandler = (id) => {
    dispatch(deleteCartProducts(id))
      .then(() => {
        dispatch(getCart())
        toast({
          title: 'Deleted Succesfully ',
          description: "Succesfully Book Deleted",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: "top"
        })
      });

  }


  // Function to handle increasing quantity
  const handleIncreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] - 1,
    }));
  };

  // Calculate total price and total quantity based on the updated quantities
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );
  const totalQuantity = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0
  );





  return (
    <div>
      <Box mt="30px">
        <Text fontSize="4xl" fontWeight="bold" color="teal">
          Cart
        </Text>

        <>
          {cartItems.length === 0 ||  cart.isLoading === true ? (
            <>
            {cart.isLoading===false && cartItems.length === 0  ? (
              // Show "Cart is Empty" message when there are no items in the cart
              <Box h="500px" w="45%" m="auto" mt="60px"  >
                <Image h="100%" w="100%"  src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"/>
              </Box> ): (
              // Show loader when the cart is still loading
              <SimpleGrid
                columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
              >
                <Loader cardShow={true} />
                <Loader cardShow={true} />
                <Loader cardShow={true} />
                <Loader cardShow={true} />
              </SimpleGrid>
            )}
          </>
          ) : (
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
              


            >
              <Container maxW="5xl" >
                <Flex justify="left" mb={3}>
                  <Text fontSize="3xl" fontWeight="bold" textAlign="center" fontFamily={"sans-serif"}>
                    Total Item:{cart.cart.length}
                  </Text>
                </Flex>
                <VStack
                  
                 
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
                     
                      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
                      h="160px"
                    >
                      <Box  w="50%" display={"flex"} justifyContent={"space-between"}>
                        <Box  w="50%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Image w="100%"
                            src={el.image}
                            alt="product image"
                            h="80%"
                            width="100%"
                            borderRadius={"10px"}
                          />
                          {/* <Avatar size='2xl'  src={el.image}  /> */}
                        </Box >
                        <Box  w="47%" display={"flex"} textAlign={'left'} alignItems={"center"} >
                          <Text noOfLines={2} fontSize={"20px"} fontFamily={"sans-serif"} as="b">{el.title}</Text>
                        </Box>

                      </Box>
                      <Box w="15%"  h="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontWeight="bold"> ₹{el.price}</Text>
                      </Box>
                      <Box w="20%"  h="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <IconButton
                          variant="outline"
                          colorScheme="teal"
                          aria-label="Call Sage"
                          fontSize="20px"
                          icon={<AddIcon />}
                          onClick={() => handleIncreaseQuantity(el.id)}

                        />
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h="40px" w="30px" border="1px solid red" as="b">
                          <Text className='quantity' fontSize={"18px"}>{quantities[el.id]}</Text>
                        </Box>

                        <IconButton
                          variant="outline"
                          colorScheme="teal"
                          aria-label="Call Sage"
                          fontSize="20px"
                          icon={<MinusIcon />}
                          onClick={() => handleDecreaseQuantity(el.id)}
                        />
                      </Box>


                      <Box  w="10%" display={"flex"} justifyContent={"center"} alignItems={"center"}>

                        <IconButton
                          colorScheme="red"
                          variant="outline"
                          aria-label="Call Segun"
                          size="lg"
                          icon={<FaTrashAlt />}
                          onClick={() => deleteHandler(el.id)}
                        />



                      </Box>

                    </Box>
                  ))}
                </VStack>
              </Container>
              {/* Order Summary Content */}
              <Container className='containerMain' marginTop="5" p={{ base: 5, md: 10 }} borderRadius="md" >
                <Box boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" padding="10px">
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
                    <Text>500</Text>
                  </HStack>
                  <HStack width="full" justify="space-between">
                    <Text>Total Quantity</Text>
                    <Text>{totalQuantity}</Text>
                  </HStack>
                  <HStack
                    fontWeight="bold"
                    width="full"
                    fontSize="lg"
                    justify="space-between"
                  >
                    <Text>Total</Text>
                    <Text>{totalPrice + 500}</Text>
                  </HStack>
                  <Button
                    bottom="0"
                    marginTop="2"
                    width="full"
                    colorScheme="messenger"
                  >
                    Checkout
                    <Icon as={FaArrowRight} color="white" />
                  </Button>
                </VStack>

                </Box>
                
              </Container>
            </SimpleGrid>
          )}
        </>




      </Box>
    </div>
  )
}

export default CartPage