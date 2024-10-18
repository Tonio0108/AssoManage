import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Login from './components/Login'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Dashboard from './components/dashboard';
import Member from './components/Member';
import Cota from './components/Cota';
import Admin from './components/Administration';
function App() {

  const hideNavbar = location.pathname === '/login';

  return (
    <>

      <BrowserRouter>
        {!hideNavbar && <NavBar />}
        {!hideNavbar && <Header />}
        <Routes>
          <Route path='/login' element = {<Login />} />
          <Route path='/'>
            <Route path='' element = { <Dashboard /> }/>
            <Route path='/member' element = { <Member /> } />
            <Route path='/member/administration' element = { <Admin /> } />
            <Route path='/cota' element = { <Cota /> } />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
