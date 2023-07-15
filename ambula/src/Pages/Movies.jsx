import React, { useEffect, useState } from 'react'
//import { useState } from 'react'

import { Box, Button, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'

const Movies = () => {
  const [data,setData] =useState([])
  const [loading,setLoading]=useState(true)
  const toast = useToast()


  
  useEffect(() => {
    axios.get('https://www.omdbapi.com/?s=Avengers&apikey=97b2b655')
      .then((res) => {
        setData(res.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  console.log(data);






  return (
    <div>

      <Box mt="30px">
      <Text  fontSize={"4xl"} as="b" color="teal">
         Movies-Section
       </Text>

      </Box>

      {data.length===0 || loading === true ? (
            <>
              <SimpleGrid
                columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
                border="2px solid green"


              >
                <Loader cardShow={true} />
                <Loader cardShow={true} />
                <Loader cardShow={true} />
                <Loader cardShow={true} />
              </SimpleGrid>

            </>
          ) :(
            <Box w="97%" mt="50px" h="auto" m="auto" paddingBottom={"100px"}>

        <SimpleGrid mt="30px" columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap="30px">
          {
            data.length > 0 &&
            data.map((ele, i) => {
              return (
                <Box key={ele.id} h="500px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"20px"} >
                  <Box h="68%" >
                    <Image paddingTop={"15px"} src={ele.Poster} w="90%" h="100%" m="auto" borderRadius={"10px"} />
                  </Box>
                  <Box h="30%" w="90%" m="auto" textAlign={"left"}  >
                    <Text mt="10px" fontSize="xl" noOfLines='1' as="b">Title : {ele.Title}</Text>

                    <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Type : {ele.Type}</Text>
                    <Text fontWeight={"500"} fontSize="lg">Year : {ele.Year}</Text>
                    <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Publish : {ele.Year}</Text>
                    <Text fontWeight={"500"} fontSize="lg">IMDBID : {ele.imdbID}</Text>
                    

                  </Box>
                 





                </Box>
              )
            })
          }
        </SimpleGrid>

      </Box>

          )

      }
      
    </div>
  )
}

export default Movies