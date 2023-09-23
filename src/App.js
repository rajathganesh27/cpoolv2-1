
import './App.css';
import Login from './Components/Login';
import Signup from './Components/DriverSignup';
import RiderLogin from './Components/RiderSignup';
import Selection from './Components/Selection';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DriverSignup from './Components/DriverSignup';
import RiderSignup from './Components/RiderSignup';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      
      <Route path='/Selection' element={<Selection/>}/>
      <Route path='/Selection/DriverSignup' element={<DriverSignup/>}/>

      <Route path='/Selection/RiderSignup' element={<RiderSignup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

