import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './pages/InitialPage'

const Rotas = () => (
  <BrowserRouter>
    <Routes>
        <Route path='/barber-manager' element={<InitialPage/>} />  
    </Routes>
  </BrowserRouter>
);

export default Rotas;