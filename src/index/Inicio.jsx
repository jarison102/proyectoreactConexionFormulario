import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Inicio = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top" >
      <div className="container-fluid">
        {/* Usando el componente Link para navegar a la página de la app */}
        <Link className="navbar-brand" to="/app">
          Inicio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Opciones
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/app">
                  Registro De Personas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registrodearticulos">
                  Registro De articulos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Cerrar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Motor Ferrari</h5>
          <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="fondo3"></div>
          <button href="#" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Llantas</h5>
          <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="fondo4"></div>
          <button href="#" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </nav>
  );
};

export default Inicio;
