import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <Box mt="20px">
      <Text color='#25D366' as='u'   fontFamily={"sans-serif"} fontSize={{ base: "30px", sm: "30px", md:"40px", lg: "45px" }} fontWeight={"600"} >Welcome To Our App</Text>

      </Box>
      <Box w="93%" m="auto" mt="40px">
        <SimpleGrid mt="30px" columns={{ base: 1, sm: 1, md: 1, lg: 2 }} gap="30px">
          <Box  h="450px" borderRadius={"20px"} boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Box  h="100%" width="100%" >
              <Image borderRadius={"20px"} w="100%" h="100%" src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28183850/home_post_2.gif" />
            </Box>

          </Box>
          <Box borderRadius="20px"
            boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            h="450px"
            overflow="hidden" /* Change 'scroll' to 'hidden' */
            padding="20px"
            position="relative" /* Add 'position: relative' */>
            <Text 
             overflowY="scroll" 
             paddingRight="15px" 
             marginRight="-15px" 
             height="100%" 
            textAlign={"left"} fontFamily={"cursive"} fontSize={"20px"} lineHeight={"8"}>
              Welcome to ReactApp Hub, a multifunctional web application designed to enhance your productivity, entertainment, and communication. Our platform offers a seamless experience with five distinct pages: Todo, Book, Movie, Cart, Contact, as well as a Home Page, Navbar, and Footer.

              On the Todo Page, you can effortlessly manage your daily tasks and stay organized. Add, edit, and delete tasks with ease, and keep track of completed items. This feature ensures you never miss an important deadline again.

              Explore the Book Page to discover a diverse collection of books. Each listing comes with essential details to help you make informed choices. Add books to your Cart for later purchase, and indulge in the joy of reading.

              For the movie enthusiasts, our Movie Page provides a wide selection of films to explore. Read synopses, find new favorites, and save movies for future viewing pleasure.

              The Cart Page displays all the books you've added, making it convenient to review and adjust your selections before making a purchase.

              Stay connected with us through the Contact Page. Reach out to our support team by filling out a simple form, and we'll address your queries and feedback promptly.

              Learn more about our company and its mission on the About Page. Discover the vision behind ReactApp Hub and the values that drive us to provide an exceptional user experience.

              Our user-friendly Navbar ensures easy navigation between pages, while the Footer contains essential links and contact information.

              At ReactApp Hub, we're committed to delivering a reliable, secure, and enjoyable experience. Whether you're organizing your tasks, exploring books and movies, or reaching out to us, our goal is to make your time on our platform delightful. Dive in and make the most of ReactApp Hub today!
            </Text>

          </Box>

        </SimpleGrid>

      </Box>
      <Box h="50px">

      </Box>


    </div>
  )
}

export default Home