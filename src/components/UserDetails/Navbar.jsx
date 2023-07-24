
import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../redux/AuthReducer/action'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => { 
  const username = useSelector(state=>state.authReducer).User.name

  const dispatch = useDispatch()

  const handleLogout = ()=>{
   dispatch(logout())
  }

  return (
    <div>
    <Box justifyContent='flex-end' display='flex' w='fit-content' border='solid 1px #ccc'  m='10px 0 10px auto' p='5px 2rem' bg='' gap='0 10px'>
      <Link>⌛Upgrade</Link>
      <Link>📝English</Link>
      <Link>👤 {username}</Link>
      <Link to='/' onClick={handleLogout}>🔑 Logout</Link>
    </Box>
    <Box pos='sticky'  as='nav' justifyContent='flex-end' display='flex' border='solid 1px #ccc'  m='0 0 0 0' bg='#0BC5EA' >
        <Box h='100%' m='auto' color='#fff' fontWeight='bold' p='6px 10px' flexGrow='1' >CreditFolio</Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/home'>Home</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/credit-Report'>Credit Report</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/offers'>Offers</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/alerts'>Alerts</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/score-simulator'>Score Simulator</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' style={{paddingRight: '3rem'}} to='/credit-education'>Credit Education</NavLink></Box>
    </Box>
    </div>

  )
}

export default Navbar