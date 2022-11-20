import React from 'react'

import {
  Box,
  Flex,

  HStack,

  IconButton,
  Button,

  useDisclosure,
 
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const Links = ['Dashboard', 'Projects', 'Team'];
    const navigate = useNavigate()

  return (
    <>
      <Box bg={"black"} px={4} 
      backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202870413-21eabecd-ad7c-4d37-a20d-1f576e08cfc8.jpg")`}
      backgroundSize= 'cover'
      backgroundRepeat= 'no-repeat'
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Box  height={"30px"} width="200px" cursor={"pointer"} onClick={()=>navigate("/home")}></Box>
            <HStack
            
              as={'nav'}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}>
                <Flex  marginLeft={"100px"} gap="30px">
               
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/home')}>Home</Text>
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/about')}>About</Text>
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/services')}>Service</Text>
             <Text color="white" cursor={'pointer'} onClick={()=>navigate('/career')}>Career</Text>
            </Flex>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button color={"white"} bg={'rgb(117,36,173)'} onClick={()=>navigate("/")}>Log out</Button>
          </Flex>
        </Flex>

        
      </Box>

    
    </>
 );
}

export default Navbar