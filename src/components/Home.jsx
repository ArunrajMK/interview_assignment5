import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

import Navbar from './Navbar'

function Home() {

  const navigate = useNavigate()

  return (
    <>
    <Box background={"black"} width="100%" height={"570px"}
    backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202892685-ce04eb7a-f01e-4859-b1e2-aee0d9e133b3.jpg")`}
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
    // https://user-images.githubusercontent.com/100182736/202892685-ce04eb7a-f01e-4859-b1e2-aee0d9e133b3.jpg
    >
    <Navbar/>
     <Box>
      <Box marginLeft={"50px"} width={"300px"}>
      <Text color={"white"} fontSize="40px">
      Ready to Reform
         Your Business?
      
      </Text>
      <Text color={"white"}>A journey of Reformation, Revolution, and Reclamation.

We are Reformiqo.
</Text>
      </Box  >
      <Box marginTop="50px">
      <Button bg={'rgb(117,36,173)'} color="white" >Contact Us</Button>
      <Button bg={'rgb(117,36,173)'} color="white" marginLeft={"15px"} onClick={()=>navigate('/services')}>Our services</Button>
      </Box>
      
     </Box>
   
    </Box>
    <Footer/>
   </>
  )
}

export default Home