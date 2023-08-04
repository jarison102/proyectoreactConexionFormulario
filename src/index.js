import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login/login'; // Importamos el componente Login
import Inicio from './index/Inicio'; // Importamos el componente Inicio
import App from './index/App'; // Importamos el componente App
import RegistroDeArtiuculos from './index/RegistroDeArtiuculos'; // Importamos el componente RegistroDeArtiuculos

ReactDOM.render(
  <Router>
    <Routes>
      {/* Definimos la ruta para el login */}
      <Route path="/" element={<Login />} />

      {/* Definimos la ruta raíz y el componente Inicio */}
      <Route path="/Inicio" element={<Inicio />} />

      {/* Definimos la ruta "/app" y el componente App */}
      <Route path="/app" element={<App />} />

      {/* Definimos la ruta "/registrodearticulos" y el componente RegistroDeArtiuculos */}
      <Route path="/registrodearticulos" element={<RegistroDeArtiuculos />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
