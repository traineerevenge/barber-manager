import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';

import InitialPage from './pages/InitialPage'
import PageLogin from './pages/Login';
import UserPage from './pages/UserPage';
import BarberPage from './pages/BarberPage';

import PanelSystem from './pages/PanelSystem/index';

const Rotas = () => (

    < BrowserRouter >
        <Routes>
          <Route path='/barber-manager' element={<InitialPage/>} />  
          <Route path='/barber-manager/login' element={<PageLogin/>} />  
          <Route path='/barber-manager/user' element={<UserPage/>} />  
          <Route path='/barber-manager/panel-system' element={<PanelSystem/>} />  
          <Route path='/barber-manager/perfil-barber' element={<BarberPage/>} />
        </Routes>
    </ BrowserRouter>
);

export default Rotas;