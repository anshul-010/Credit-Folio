import { Navbar } from './AllRoutes/Navbar';
import './App.css';
import { ContactInfo } from './components/ContactInfo';
import { EmployeInfo } from './components/EmployeInfo';
import { Home } from './components/Home';
import { Personalinfo } from './components/Personalinfo';
import { Topbar } from './components/Topbar';

function App() {
  return( 
  <>
    <div >
      {/* <Topbar/>
      <Navbar/> */}
      
      {/* <Personalinfo/> */}
      {/* <ContactInfo/> */}
      <EmployeInfo/>
    </div>
  </>)
}

export default App;
