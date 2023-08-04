import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Asignar la función de navegación a una constante

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === 'Jarimices@gmail.com' && password === 'Micancespedes') {
      setLoggedIn(true);
      navigate('/Inicio'); // Usar la constante para redirigir a la página de inicio ("/Inicio")
    } else {
      alert('Datos incorrectos');
    }
  };

  if (!loggedIn) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <div className="row justify-content-center align-items-center g-2">
                <div className="col-md-8">
                  <div className="card rounded">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                      <form onSubmit={handleLogin}>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Correo:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div id="emailHelp" className="form-text">
                            Escribe tu correo electrónico
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Contraseña:
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <button className="btn btn-success">
                          <Link to="/" className="nav-link">
                            Entrar
                          </Link>
                        </button>
                      </form>
                    </div>
                    <div className="card-footer text-muted"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Usuario autenticado. Redirigiendo...</p>;
  }
}

export default Login;
