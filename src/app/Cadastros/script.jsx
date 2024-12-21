import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './App.jsx';               // Página de Login
import { AppCadastro } from './AppCadastro.jsx'; // Página de Cadastro

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={App}/>
      <Route path="/cadastro" element={AppCadastro}/>
    </Routes>
  </BrowserRouter>
);
