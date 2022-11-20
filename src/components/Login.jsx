import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action'
import {
  Flex,
  Box,
  FormControl,  
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Image

  } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';


function Login() {



    const cridentials = useSelector((store)=>store.data.cridentials)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const dispatch = useDispatch()
const navigate =useNavigate()

const handleClick = ()=>{
    let flag = false
  for(let i=0; i<cridentials.length; i++){
    if(cridentials[i].email===email&&cridentials[i].password===password){
     flag = true;
    }
  }
  if(flag){
    
    navigate("/home")

}else{
    alert("wrong cridential");
   
}
  console.log("cridentials",cridentials)
}



useEffect(()=>{
dispatch(getData())
// window.location.reload()
},[dispatch])





return (
  <>
  
    <Flex 
    
    backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202858732-6a80056f-43ae-400a-9329-5365c3b6cdd0.jpg")`}
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
    
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} marginTop={"-20px"}>
        <Stack align={'center'} marginTop={"-20px"}>
          <Heading fontSize={'4xl'} color="white">Sign in </Heading>
          <Flex>
          <Text fontSize={'lg'}  color="white" >
            to interact with your 
          </Text>
          <Text fontSize={'lg'} marginLeft="3px" color="blue.400" ><Link to="/recover">account</Link> </Text>
          </Flex>
        </Stack>
       
          <Stack spacing={4}>
            <FormControl id="email">
            
              <Input type="email" placeholder='Email' color={"#7524ad"} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" >
            
              <Input type="password" color={"#7524ad"} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox color={"white"}>Remember me</Checkbox>
                <Link color={'blue.400'} to="/recover" ><Text color={'rgb(117,36,173)'}>Forgot password?</Text></Link>
              </Stack>
              <Button
                bg={'rgb(117,36,173)'}
               
                color={'white'}
                onClick={handleClick}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Flex  marginTop={"-20px"}>
              <Text fontSize={'lg'}  color="white" >
            Do you have an account yet?  
          </Text><Link  to="/signup"> <Text color={'blue.400'} marginLeft="3px"> Sign Up</Text></Link>
          </Flex>
            </Stack>
          </Stack>
      
      </Stack>
    </Flex>
    </>
  );
}


export default Login