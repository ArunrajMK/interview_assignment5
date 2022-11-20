
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
import { useDispatch } from 'react-redux';
import { getData, postData } from '../redux/action';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
const handleClick = ()=>{
  
 if(name!==""&&email!==""&&password!==""){

  let data = {
    name:name,
    email:email,
    password:password
}

dispatch(postData(data))

alert("Signup Success")
navigate("/")

 }else{
  alert("Please fill the complete form")
 }

}


    return (
        <Flex
        
        backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202859681-e37c432f-8f50-4b62-b7ca-e0c4f39c3029.jpg")`}
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          >
          <Stack marginRight={"300px"}    maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'} color="white">
                Sign up
              </Heading>
              <Text fontSize={'lg'} color="white" >
                to enjoy all of our cool features 
              </Text>
            </Stack>
           
              <Stack spacing={4}>
                <HStack>
                 
                    <FormControl id="firstName" isRequired>
                      <Input type="text" placeholder='Name' color={"white"} onChange={(e)=>setName(e.target.value)} />
                    </FormControl>
                 
                </HStack>
                <FormControl id="email" isRequired>
                
                  <Input type="email" placeholder='Email' color={"white"} onChange={(e)=>setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} color={"white"} placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
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
                    Sign up
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
      );
}

export default SignUp