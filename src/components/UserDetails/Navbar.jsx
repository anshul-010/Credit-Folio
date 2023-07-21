
import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => { 
  return (
    <>
    <Box justifyContent='flex-end' display='flex' w='fit-content' border='solid 1px #ccc'  m='10px 0 10px auto' p='5px 2rem' bg='' gap='0 10px'>
      <Link>⌛Upgrade</Link>
      <Link>📝English</Link>
      <Link>👤 My Account</Link>
      <Link>🔑 Logout</Link>
    </Box>
    <Box as='nav' justifyContent='flex-end' display='flex' border='solid 1px #ccc'  m='0 0 2rem 0' p='0 2rem 0 0' bg='blue.200' gap='0 2px'>
        <Box h='100%' m='auto' color='#fff' fontWeight='bold' p='6px 10px' flexGrow='1' >CreditFoli</Box>
        <Box display={'flexbox'} justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/home'>Home</NavLink></Box>
        <Box display={'flexbox'} justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/credit-Report'>Credit Report</NavLink></Box>
        <Box display={'flexbox'} justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/offers'>Offers</NavLink></Box>
        <Box display={'flexbox'} justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/alerts'>Alerts</NavLink></Box>
        <Box display={'flexbox'} justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/score-simulator'>Score Simulator</NavLink></Box>
        <Box display={'flexbox'} justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/credit-education'>Credit Education</NavLink></Box>
    </Box>
    </>

  )
}

export default Navbar