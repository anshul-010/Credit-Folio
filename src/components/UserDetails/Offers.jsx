

import { Box, HStack, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import home from '../../images/home.png'
import personal from '../../images/personal.png'
import business from '../../images/business.png'
import car from '../../images/car.png'
import card from '../../images/card.png'
import financeProduct from '../../images/financeProduct.png'
import homeLoan from '../../images/homeLoan.png'

const Offers = () => {
  return (
    <div style={{padding: '0'}}>
    <Text as='h2' w='fit-content' fontSize='25px' m='2rem' color='#333' fontWeight='500' >Your Personalized Offers</Text>
    <HStack display='flex' justifyContent='center' flexWrap='wrap' gap='2rem 4rem' p='1rem 2rem' w='fit-content' m='2rem auto' bg='#eee' borderRadius='4px'>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={card} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>1</Box>
     </Stack>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={personal} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>0</Box>
     </Stack>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={business} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>2</Box>
     </Stack>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={home} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>0</Box>
     </Stack>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={homeLoan} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>1</Box>
     </Stack>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={car} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>1</Box>
     </Stack>
    
     <Stack borderRadius='6px' bg='#02A6CB' w='fit-content' border='solid 1px #ccc' p='4px' >
        <Box textAlign='center' bg='#fff' p='10px 18px 4px 18px'>
        <img className='icon' src={financeProduct} alt="" />
        <Text as='p' fontSize='13px' >Credit</Text>
        <Text as='p' fontSize='13px' >Cards</Text>
        </Box>
        <Box bg='#00A6CA' textAlign='center' color='#fff'>0</Box>
     </Stack>



    </HStack>
    </div>
  )
}

export default Offers