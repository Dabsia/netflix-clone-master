import React from 'react';
import './App.css'
import Home from './Pages/Home/Home';
import NetflixShow from './Pages/NetflixShow/NetflixShow';
import SignIn from './Pages/SignIn/SignIn'
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return(
    <Routes>
      <Route exact path = '/' element = {<Home/>} />
      <Route path = '/netflix-show' element = {<NetflixShow/>} />
      <Route path = '/sign-in' element = {<SignIn/>} />
    </Routes>
  )
}
export default App;
