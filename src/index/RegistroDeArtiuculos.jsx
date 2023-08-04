import React, { useState } from "react";
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Importamos Link para crear enlaces de navegación
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Marca: "",
    Fecha: "",
    Pais: "",
    Departamento: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar el envío de los datos al servidor utilizando "formData"
    axios.post("http://localhost:3001/registerA", formData).then((resp) => {
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

  axios.post("http://localhost:3001/Consultar", formData).then((resp) => {
    console.log(resp.data);
  
    if (resp.data.success) {
      const tablaDatos = document.getElementById('tablaDatos');
  
      // Limpia el contenido de la tabla antes de agregar nuevas filas
      tablaDatos.innerHTML = '';
  
      const results = resp.data.data;
      results.forEach((result) => {
        const row = document.createElement('tr');
  
        const idCell = document.createElement('td');
        idCell.textContent = result.ID; // Ajusta esto según la estructura de tus datos
        row.appendChild(idCell);
  
        const nombreCell = document.createElement('td');
        nombreCell.textContent = result.Nombre;
        row.appendChild(nombreCell);
  
        const marcaCell = document.createElement('td');
        marcaCell.textContent = result.Marca;
        row.appendChild(marcaCell);
  
        const fechaCell = document.createElement('td');
        fechaCell.textContent = result.Fecha;
        row.appendChild(fechaCell);
  
        const paisCell = document.createElement('td');
        paisCell.textContent = result.Pais;
        row.appendChild(paisCell);
  
        const departamentoCell = document.createElement('td');
        departamentoCell.textContent = result.Departamento;
        row.appendChild(departamentoCell);
  
        tablaDatos.appendChild(row);
      });
    }
  });
  

  return (
    <div className="App fondoAUTOS ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ">
            <div class="container">
              <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-8">
                  <div class="card custom-margin ">
                    <div class="card-header ">
                      <center>
                        <h1>Registro De Articulos</h1>
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
                            <label htmlFor="Marca">Marca</label>
                            <br />
                            <input
                              type="text"
                              id="Marca"
                              name="Marca"
                              value={formData.Marca}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor="Fecha">Fecha </label>
                            <br />
                            <input
                              type="datetime-local"
                              name="Fecha"
                              id="Fecha"
                              value={formData.Fecha}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor="Pais">Pais: </label>
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
                            <label htmlFor="Departamento">Departamento :</label>
                            <br />
                            <input
                              type="text"
                              name="Departamento"
                              id="Departamento"
                              value={formData.Departamento}
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

          <div class="col-md-6">
            <div class="col-md-12 custom-margin">
              <table class="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Páis</th>
                    <th scope="col">Departamento</th>
                  </tr>
                </thead>
                <tbody id="tablaDatos" class="table-group-divider">
                  <tr class="table-primary">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
