import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

const navigate = useNavigate()

  return (
    <Box height="150px" border="1px solid black"  
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
    backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202893837-380e46e0-30c0-4cc3-9b79-455ff69a2efe.jpg")`}
    
    >
      <Flex marginTop={"20px"}>
      <Box marginLeft={"50%"}>
      <Text color="white" cursor={'pointer'} onClick={()=>navigate('/home')}>Home</Text>
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/about')}>About</Text>
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/services')}>Service</Text>
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/career')}>Career</Text>
      </Box>
      <Box marginLeft={"30px"}>
      <Text color="white">Account</Text>
       <Text cursor={'pointer'} color="white" onClick={()=>navigate('/')}>Sign In</Text>
       <Text cursor={'pointer'} color="white" onClick={()=>navigate('/signup')}>Sign Up</Text>
       <Text cursor={'pointer'} color="white" onClick={()=>navigate('/recover')}>Forgot Password</Text>
      </Box>
      <Box marginLeft={"30px"}  height="100px" width={"300px"}>
     
  <iframe title='map' height="100px" src="https://maps.google.com/maps?q=${Reformiqo Business Service PVT. LTD.}&t=&z=13&ie=UTF8&iwloc=&output=embed"/>

        {/* <iframe title='map' height="100px" borderRadius="20px" alt="map" src="https://maps.google.com/maps?q=${Reformiqo Business Service PVT. LTD.}&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe> */}
      </Box>
      
      </Flex>
    </Box>
  )
}

export default Footer