import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login';
import Signup from './Components/DriverSignup';
import RiderLogin from './Components/RiderSignup';
import Selection from './Components/Selection';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DriverSignup from './Components/DriverSignup';
import RiderSignup from './Components/RiderSignup';

const App = () => {
  return (
      <div>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Selection' element={<Selection/>}/>
        <Route path='/Selection/RiderSignup' element={<RiderSignup/>}/>  
        <Route path='/Selection/DriverSignup' element={<RiderSignup/>}/>  
        


      </Routes>
      </BrowserRouter>
      </div>
   
  )
}

export default App

