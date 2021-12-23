import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './pages/InitialPage'
import PageLogin from './pages/Login';
import UserPage from './pages/UserPage';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
        <Route path='/barber-manager' element={<InitialPage/>} />  
        <Route path='/barber-manager/login' element={<PageLogin/>} />  
        <Route path='/barber-manager/user' element={<UserPage/>} />  
    </Routes>
  </BrowserRouter>
);

export default Rotas;