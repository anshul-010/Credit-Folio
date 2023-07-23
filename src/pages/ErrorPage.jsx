

import React from 'react'
import { Text } from '@chakra-ui/react'

export const ErrorPage = () => {
  return (
    <div>
        <Text as='h1' fontSize='40px' color='#333' m='5rem auto 10px auto' w='fit-content'  p='10px' className=''>403</Text>
        <Text as='p' m='auto' color='#1464FD !important' textAlign='center' fontSize='28px' p='10px' >Page not found</Text>
    </div>
  )
}


