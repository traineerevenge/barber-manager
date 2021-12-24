import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './pages/InitialPage'
import PageLogin from './pages/Login';
import UserPage from './pages/UserPage';
import BarberPage from './pages/BarberPage';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
        <Route path='/barber-manager' element={<InitialPage/>} />  
        <Route path='/barber-manager/login' element={<PageLogin/>} />  
        <Route path='/barber-manager/user' element={<UserPage/>} />  
        <Route path='/barber-manager/perfil-barber' element={<BarberPage/>} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;