import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Career() {
  return (
    <>
    <Navbar/>
    <Box  height="500px" 
    backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202892685-ce04eb7a-f01e-4859-b1e2-aee0d9e133b3.jpg")`}
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
    >
      <Text color={"white"}>Career</Text>





    </Box>
    <Footer/>
    </>
  )
}

export default Career