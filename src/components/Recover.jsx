import React, { useEffect, useState } from 'react'
import {
    Flex,
    FormControl,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';
import {  Link } from 'react-router-dom';


function Recover() {
    const cridentials = useSelector((store)=>store.data.cridentials)
    const [email, setEmail] = useState("")
    const [getPassword, setGetPassword] = useState([])
    const dispatch = useDispatch()
    
    
console.log("cridential",cridentials)

   

const handleClick = ()=>{
let filter = cridentials.filter((item)=>{
return item.email===email
})
setGetPassword(filter)

}

useEffect(() => {
    dispatch(getData())
}, [dispatch])


  return (
    <Flex
        backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202859681-e37c432f-8f50-4b62-b7ca-e0c4f39c3029.jpg")`}
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          >
          <Stack spacing={8} marginRight={"400px"} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'} color="white">
               Recover
              </Heading>
              <Text fontSize={'lg'} color="white" >
                to interact with your account
              </Text>
            </Stack>
           
              <Stack spacing={4}>
                <HStack>
                 
                    <FormControl id="firstName" isRequired>
                   
                    </FormControl>
                 
                </HStack>
                <FormControl id="email" isRequired>
                
                  <Input type="email" placeholder='Email' color={"white"} onChange={(e)=>setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <InputGroup>
                  {getPassword?.map((item)=>(
                  <Text color={'white'}>Hi {item.name}, your password is {item.password}</Text>
                  ))}
                    
                    <InputRightElement h={'full'}>
                    
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"

                   bg={'rgb(117,36,173)'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }} 
                    onClick={handleClick}
                    >
                   Get password
                  </Button>
                </Stack>
                <Stack pt={6}>
                    <Flex>
                  <Text align={'center'} color="white">
                    Already a user? 
                  </Text><Text marginLeft={'2px'} color='blue.400'><Link to='/'> Login</Link></Text>
                  </Flex>
                </Stack>
              </Stack>
           
          </Stack>
        </Flex>
  )
}

export default Recover