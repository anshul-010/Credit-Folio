import { Navbar } from './AllRoutes/Navbar';
import './App.css';
import { PatchCreditCard } from './EditData/PatchCreditCard';
import { ContactInfo } from './components/ContactInfo';
import { EmployeInfo } from './components/EmployeInfo';
import { EnquiryInfo } from './components/EnquiryInfo';
import { Home } from './components/Home';
import { Personalinfo } from './components/Personalinfo';
import { Topbar } from './components/Topbar';
import { About } from './pages/About';

function App() {
  return( 
  <>
    <div >
      {/* <Topbar/>
      <Navbar/> */}
      {/* <About/> */}
      <PatchCreditCard/>
      {/* <Personalinfo/> */}
      {/* <ContactInfo/> */}
      {/* <EmployeInfo/> */}
      {/* <EnquiryInfo/> */}
    </div>
  </>)
}

export default App;
