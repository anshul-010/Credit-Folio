
import { Box, Button, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../redux/AuthReducer/action'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';

const Navbar = () => { 
  const navigate = useNavigate()
  const username = useSelector(state=>state.authReducer).User.name
  console.log(username);
  const dispatch = useDispatch()
  const handleLogout = ()=>{
   dispatch(logout())
  }

  const handleClick = (name) => {
    if (name === 'admin') {
      // console.log("adminClick");
      navigate('/admin');
    }
  };
  return (
    <div>
    <Box  justifyContent='flex-end' display='flex' w='fit-content' border='solid 1px #ccc'  m='10px 0 10px auto' p='5px 2rem'  gap='0 10px' bg="lightGreen">
      <Link>⌛Upgrade</Link>
      <Link>📝English</Link>
      <Link onClick={()=>handleClick(username)}>🙍‍♂️ {username}</Link>
      <Link to='/' onClick={handleLogout}>🔑 Logout</Link>
    </Box>
    <Box pos='sticky'  as='nav' justifyContent='flex-end' display='flex' border='solid 1px #ccc'  m='0 0 0 0' bg='#fff' >
        <Box className='logoName' cursor='pointer' onClick={()=>navigate('/')} h='100%' m='auto' color='#0078e9' fontWeight='600' p='6px 18px' flexGrow='1' >CREDIT-FOLIO</Box>
        <Box display={'flexbox'} borderLeft='solid 1px #ccc' borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' to='/home'>Home</NavLink></Box>

        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' fontSize={['14px','14px','14px','12px']}   to='/accounts'>Accounts</NavLink></Box>

        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link' fontSize={['14px','14px','14px','12px']}   to='/credit-Report'>Credit Report</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link'  fontSize={['14px','14px','14px','12px']}  to='/offers'>Offers</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link'  fontSize={['14px','14px','14px','12px']}  to='/alerts'>Alerts</NavLink></Box>
        <Box display={'flexbox'} borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink className='nav-link'  fontSize={['14px','14px','14px','12px']}  to='/score-simulator'>Score Simulator</NavLink></Box>
        <Box borderRight='solid 1px #ccc' justifyContent={'center'} alignItems={'center'} bg='white'> <NavLink   className='nav-link' style={{paddingRight: '3rem'}} to='/credit-education'>Credit Education</NavLink></Box>
    </Box>
    </div>

  )
}

export default Navbar