import './App.css';
import { Home } from './components/Home';
import Navbar from './components/UserDetails/Navbar';
import AllRoutes from './pages/AllRoutes';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <>
      <div >
        <Navbar/>
        <AllRoutes />
      </div>
    </>)
}

export default App;
