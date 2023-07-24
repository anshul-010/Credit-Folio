import { Personalinfo } from "../components/Personalinfo";
import { ContactInfo } from "../components/ContactInfo";
import { EmployeInfo } from "../components/EmployeInfo";
import { EnquiryInfo } from "../components/EnquiryInfo";
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
  Button,
  HStack,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import DetailsRoutes from "./DetailsRoutes";
import { Home } from "../components/Home";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import UserDetail from "./UserDetail";
import CreditInfo from "../components/CreditInfo";
import CreditCard from "../components/CreditCard";
import Loan from "../components/Loan";
import Postpaid from "../components/Postpaid";
import { useDispatch } from "react-redux";
import { logout } from "../redux/AuthReducer/action";

const LinkItems = [
  { name: "CREDIT CARD", icon: FiHome },
  { name: "LOANS", icon: FiTrendingUp },
  { name: "POSTPAID", icon: FiStar },
];

export default function Admin({ children }) {
  const { tab } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minH='20vh'
      overflowX='hidden'
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        // onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p='1'>
        {children}
      </Box>

      <Box
        overflowY='scroll'
        overflowX='hidden'
        h='500px'
        ml='auto'
        w='80%'
        mr='2px'
      >
        {tab === undefined && <CreditCard />}
        {tab === "CREDIT-CARD" && <CreditCard />}
        {tab === "LOANS" && <Loan />}
        {tab === "POSTPAID" && <Postpaid />}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <>
      <HStack w='100%' bg='#23AAF2'>
        <Text
          p='10px'
          textAlign='center'
          fontSize='20px'
          color='#fff'
          width='284px'
          as='h2'
        >
          Admin
        </Text>
        <Text
          w='100%'
          textAlign='right'
          minw='300px'
          bg='#fff'
          p='10px'
          pl='3rem'
          pr='1rem'
          fontSize='25px'
          as='h2'
        >
          {" "}
          <Button onClick={logoutHandler} color='#fff' bg='#23AAF2'>
            {" "}
            Log out
          </Button>
        </Text>
      </HStack>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderRight='1px'
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        position='absolute'
        h='full'
        {...rest}
      >
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
  const { tab } = useParams();
  let activeTab = children.split(" ").join("-");
  let path = "/admin/" + activeTab;
  return (
    <Link
      to={path}
      style={{ textDecoration: "none", margin: "0", fontSize: "13px" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align='center'
        p='20px 15px'
        mx='0'
        borderBottom='1px solid #ddd'
        // borderRadius="lg"
        role='group'
        cursor='pointer'
        bg={tab === activeTab ? "cyan.400" : "#fff"}
        color={tab === activeTab ? "#fff" : "#333"}
        {...rest}
      >
        {icon && <Icon mr='4' fontSize='16' as={icon} />}
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
      height='20'
      alignItems='center'
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent='flex-start'
      {...rest}
    >
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<FiMenu />}
      />
    </Flex>
  );
};
