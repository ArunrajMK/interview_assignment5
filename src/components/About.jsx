import { Box, Button, Flex, Text  } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function About() {
  const [flag, setFlag] = useState(false)
  return (
    <>
    <Navbar/>
    <Box marginLeft={"160px"} 
    backgroundImage={`url("https://user-images.githubusercontent.com/100182736/202869447-e97ea6fd-a1fe-4f99-9d1f-1b1a6b2d70be.jpg")`}
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
    marginBottom={"100px"}
    >
      <Text fontSize={"30px"} fontWeight='bold'>
        About
      </Text>
      <Box marginLeft={"300px"} width={"300px"}>
      <Text alignContent={'center'} align='left' fontSize={"11px"}  >
      A journey of Reformation, Revolution, and Reclamation.

We are Reformiqo.      

Founded with a strong set of values, Reformiqo is a
boutique consulting company that helps businesses
move towards future-fit business operations. The
company's diverse industry experience enables it to
introduce innovation and change.

The company engages in building trustful relationships
with clients and stakeholders at every stage. Our aim is
to provide unique and propositional services to unlock
the true potential of businesses. We initiate a change in
corporate and digital ventures through technology and
visionary management consulting. 

      </Text>
      </Box>
      <Button marginTop={"50px"} marginBottom="70px" bg={'rgb(117,36,173)'} color="white" onClick={()=>setFlag(!flag)} >Read More</Button>
      {flag && <Flex marginTop={"150px"} gap="30px" marginRight={"120px"}>
         <Box >
          <Text fontWeight={"bold"}>
          Our Approach / Our Process
          </Text>
          <Text fontSize={"11px"}>
          Identifying a roadblock is more critical than solving
one. Companies often fail to identify small yet critical
issues that sit right at the bottom of a channel. The
Simplistic Approach of Reformiqo identifies issues that
often go unnoticed but cause a great deal of concern.
Our experts employ proven and pre-planned strategies
to enable smarter and faster decisions. 

          </Text>
         </Box>
         <Box>
          <Text fontWeight={"bold"}>
          Get acquainted with reforms 

          </Text>
          <Text fontSize={"11px"}>
          The greatest challenges a company faces today are
organizational crises such as technology integration,
operational disagreements, hierarchy conflicts, etc
which significantly can hamper progress. Reformiqo
guides businesses at such crossroads with pivotal
solutions. We take pride in our user-friendly and
adaptable systems. 

          </Text>
         </Box>
      </Flex>}
    </Box>
    <Footer/>
    </>
  )
}

export default About