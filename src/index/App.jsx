import React, { useState } from "react";
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Importamos Link para crear enlaces de navegación
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Correo: "",
    Telefono: "",
    Pais: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar el envío de los datos al servidor utilizando "formData"
    axios.post("http://localhost:3001/register", formData).then((resp) => {
      console.log(resp.data);

      if (resp.data.success) {
        return alert("Formulario Enviado Con éxito");
      }
      alert("Formulario No enviado");
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App fondo ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ">
            <div class="container">
              <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-8">
                  <div class="card custom-margin ">
                    <div class="card-header ">
                      <center>
                        <h1>Registro De Personas</h1>
                      </center>
                    </div>
                    <div class="card-body blue-background ">
                      <header className="App-header">
                        <div>
                          <form
                            className="formulario"
                            id="formulario"
                            onSubmit={handleSubmit}
                          >
                            <label htmlFor="Nombre">Nombre:</label>
                            <br />
                            <input
                              type="text"
                              id="Nombre"
                              name="Nombre"
                              value={formData.Nombre}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor="Apellido">Apellido</label>
                            <br />
                            <input
                              type="text"
                              id="Apellido"
                              name="Apellido"
                              value={formData.Apellido}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor="Correo">Correo: </label>
                            <br />
                            <input
                              type="text"
                              name="Correo"
                              id="Correo"
                              value={formData.Correo}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor="Telefono">Telefono: </label>
                            <br />
                            <input
                              type="text"
                              name="Telefono"
                              id="Telefono"
                              value={formData.Telefono}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor="Pais">Pais :</label>
                            <br />
                            <input
                              type="text"
                              name="Pais"
                              id="Pais"
                              value={formData.Pais}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <button type="submit" className="btn btn-warning">
                              Enviar
                            </button>
                            <button className="btn btn-success">
                              <Link to="/Inicio" className="nav-link">
                                Volver
                              </Link>
                            </button>
                          </form>
                          <div class="card-footer text-muted"></div>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
