import React from 'react';
import {Personalinfo} from '../components/Personalinfo'
import {ContactInfo} from '../components/ContactInfo'
import {EmployeInfo} from '../components/EmployeInfo'
import {EnquiryInfo} from '../components/EnquiryInfo'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  HStack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import DetailsRoutes from './DetailsRoutes';
import { Home } from '../components/Home';
import { Link, NavLink, useParams } from 'react-router-dom';
import UserDetail from './UserDetail';
import CreditInfo from '../components/CreditInfo';

const LinkItems = [
  { name: 'Personal Information', icon: FiHome},
  { name: 'Contact Information', icon: FiTrendingUp },
  { name: 'Employment Information', icon: FiCompass },
  { name: 'Account Information', icon: FiStar  },
  { name: 'Enquiry Information', icon: FiSettings  },
];

export default function ReportPage({ children }) {
  const {tab} = useParams()
  console.log(tab,'Tab')
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="20vh" overflowX='hidden' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        // onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p="1">
        {children}
      </Box>

      <Box overflowY='scroll' overflowX='hidden' h='500px' ml='auto' bg='#b5e4fe14' w='80%' mr='2px'>
       {tab == undefined && <Personalinfo/>}
       {tab === 'Personal-Information' && <Personalinfo/>}
       {tab === 'Contact-Information' && <ContactInfo/>}
       {tab === 'Employment-Information' && <EmployeInfo/>}
       {tab === 'Account-Information' && <CreditInfo/>}
       {tab === 'Enquiry-Information' && <EnquiryInfo/>}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <>
      <HStack  w='100%' p='0px' >
        <Text p='10px 0' textAlign='center' w='232px' as='h2'>Credit Report </Text>
        <Text  minw='300px' flex={2} bg='#fff' p='10px 4.8rem' fontSize='22px' as='h2'>Your CIBIL Score is 774</Text>
      </HStack>
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      width='240px'
      position="absolute"
      h="full"
      {...rest}>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
    </>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  const {tab} = useParams()
  let activeTab = children.split(' ').join('-')
  let path = '/credit-Report/'+activeTab
  return (
    <Link to={path}  style={{ textDecoration: 'none', margin: '0' , fontSize: '13px' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="20px 15px"
        mx="0"
        borderBottom ='1px solid #ddd'
        // borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={tab === activeTab ? '#0094e9c2':'#fff' }
        color={tab === activeTab ? '#fff':'#333' }
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

    </Flex>
  );
};