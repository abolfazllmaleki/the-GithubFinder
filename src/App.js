import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/pages/Home'
import UserPage from './pages/UserPage';
import Navbar from './Components/Navbar';
import { useState } from 'react'
import About from './pages/About';

function App() {
  const [username,Setusername]=useState(null)
  const show = (x)=>{

    if (x!=null){
      
      Setusername(x)
      

    }


  }
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<><Home username={(x)=>show(x)}/></>}/>
        <Route path='/user/:login' element={<><UserPage username={username}/></>}/>
        <Route path='/about' element={<><About/></>}/>

        

      </Routes>

    </Router>
    </>
  )
}

export default App