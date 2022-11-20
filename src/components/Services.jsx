import { Box, Button, Flex, Grid, GridItem , Image, Text, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box height={"560px"}>
      <Navbar/>
      <Flex>
     <Grid templateColumns='repeat(3, 130px)' gap={3} marginLeft="30px" marginTop={"20px"} marginBottom={"43px"}>
      <GridItem cursor={"pointer"} bg="grey"   onClick={onOpen} height="140px" width="120px" borderRadius={"15px"} ><Box border="1px solid black" width={"50px"} borderRadius={"100%"} marginTop="10px" marginLeft="10px" height={"50px"}>
        <Image borderRadius={"100%"} src="https://th.bing.com/th/id/OIP.9Ivs3YomF0kU7uWcS_WyZgAAAA?pid=ImgDet&rs=1" alt="icon" /></Box><Text>Accounts</Text>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Accounts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      </GridItem >
      <GridItem cursor={"pointer"} bg="grey"   onClick={onOpen} height="140px" width="120px" borderRadius={"15px"} ><Box border="1px solid black" width={"50px"} borderRadius={"100%"} marginTop="10px" marginLeft="10px" height={"50px"}>
        <Image borderRadius={"100%"} src="https://th.bing.com/th/id/OIP.LXltaTU9EIkOcN8V8XRHZAAAAA?pid=ImgDet&rs=1" alt="icon" /></Box><Text>Roles & Permissions</Text>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Roles & Permissions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      </GridItem >
      <GridItem cursor={"pointer"}  bg="grey"   onClick={onOpen} height="140px" width="120px" borderRadius={"15px"} ><Box border="1px solid black" width={"50px"} borderRadius={"100%"} marginTop="10px" marginLeft="10px" height={"50px"}>
        <Image borderRadius={"100%"} src="https://th.bing.com/th/id/OIP.YbwvSfzP1IJdXNaES8YFtwHaHa?pid=ImgDet&w=1000&h=1000&rs=1" alt="icon" /></Box><Text>Integration</Text>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Integration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      </GridItem >
      <GridItem cursor={"pointer"} bg="grey"   onClick={onOpen} height="140px" width="120px" borderRadius={"15px"} ><Box border="1px solid black" width={"50px"} borderRadius={"100%"} marginTop="10px" marginLeft="10px" height={"50px"}>
        <Image borderRadius={"100%"} src="https://i0.wp.com/www.charitycomms.org.uk/wp-content/uploads/2019/03/Chat-bot-icon_400x400_Section-8.png?fit=400%2C300&ssl=1" alt="icon" /></Box><Text>Chat Bots</Text>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat Bots</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      </GridItem >
      <GridItem cursor={"pointer"} bg="grey"   onClick={onOpen} height="140px" width="120px" borderRadius={"15px"} ><Box border="1px solid black" width={"50px"} borderRadius={"100%"} marginTop="10px" marginLeft="10px" height={"50px"}>
        <Image borderRadius={"100%"} src="https://th.bing.com/th/id/OIP.O7jUxTANR9s8XSmWMg5qLgHaHa?pid=ImgDet&rs=1" alt="icon" /></Box><Text>In app messaging</Text>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>In-App Messaging</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      </GridItem >
      <GridItem cursor={"pointer"} bg="grey"   onClick={onOpen} height="140px" width="120px" borderRadius={"15px"} ><Box border="1px solid black" width={"50px"} borderRadius={"100%"} marginTop="10px" marginLeft="10px" height={"50px"}>
        <Image borderRadius={"100%"} src="https://th.bing.com/th/id/R.5e5b7b6acb16870d271bd3b6d001b2ec?rik=xcQqkKFK%2fXwr1g&riu=http%3a%2f%2fwww.pozmark.com%2fassets%2fwp-content%2fuploads%2f2018%2f05%2fknowledge-experience-purple.png&ehk=gh199V9A6TUt9Nk1zt2ZK7r6E%2ffWryxN0HFPGLjX7jM%3d&risl=&pid=ImgRaw&r=0" alt="icon" /></Box><Text>Knowledge Base</Text><Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lorem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal></GridItem >
      </Grid>
      <Text fontSize={"10px"} align="left" marginTop={"15px"}>
      Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like
Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book
      </Text>
      </Flex>
      {/* <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium id cumque culpa quaerat debitis dolor exercitationem 
               tempore architecto, 
              aperiam at consectetur quasi ipsum in amet libero,
               qui harum ea enim.</Text>
          </ModalBody>

          <ModalFooter>
            <Box colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Box>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
       
    </Box>
    <Footer/>
    </>
  )
}

export default Services