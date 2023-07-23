import './App.css';
import { PatchCreditCard } from './EditData/PatchCreditCard';
import { ContactInfo } from './components/ContactInfo';
import { EmployeInfo } from './components/EmployeInfo';
import { EnquiryInfo } from './components/EnquiryInfo';
import { Home } from './components/Home';
import { Personalinfo } from './components/Personalinfo';
import { Topbar } from './components/Topbar';
import { About } from './pages/About';
import AllRoutes from './pages/AllRoutes';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './components/UserDetails/Navbar';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';



function App() {


  const isAuth = useSelector(state => state.authReducer).isAuth
  console.log('Auth', isAuth)
  let path = useLocation().pathname.replace('/', '')
  console.log('!path.includes && isAuth', !path.includes('admin') && isAuth)
  return (
    <>
      <div >
        {!path.includes('admin') && isAuth && <Navbar />}
        {!path.includes('admin') && !isAuth && <Topbar />}
        <AllRoutes />
      
        {/* <About/> */}
        {/* <PatchCreditCard/> */}
        {/* <Personalinfo/> */}
        {/* <ContactInfo/> */}
        {/* <EmployeInfo/> */}
        {/* <EnquiryInfo/> */}
      </div>
    </>)
}

export default App;
