
import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const CibilScore = () => {
  return (
    <div>
        <Box p="1rem" m='2rem auto' w='fit-content'>
            <HStack border='solid 3px #FF7224' p='1.5rem'>
                <Box>
                    <Text as='p' fontWeight='bold'>You are eligible for unlimited CIBIL Score and reports</Text>
                    <Text as='p'>Monitor your credit and improve your loan eligibility.</Text>
                </Box>
                <Button m='0 2rem' color='#fff' bg='#FF7224'>GET UNLIMITED ACCESS NOW</Button>
            </HStack>
        </Box>

        
    </div>
  )
}

export default CibilScore