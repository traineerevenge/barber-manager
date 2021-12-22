import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './pages/InitialPage'
import PageLogin from './pages/Login';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
        <Route path='/barber-manager' element={<InitialPage/>} />  
        <Route path='/barber-manager/login' element={<PageLogin/>} />  
    </Routes>
  </BrowserRouter>
);

export default Rotas;