// Importar los módulos necesarios
const db = require("./db"); // Módulo para interactuar con la base de datos
const { Consultar } = require('./db'); // Ajusta la ruta según la estructura de tu proyecto
const express = require("express"); // Módulo de Express para crear el servidor
const cors = require("cors"); // Middleware para permitir acceso cruzado entre dominios


// Crear una instancia de Express
const app = express();

// Configurar middleware
app.use(express.json()); // Analizar las solicitudes con datos JSON y convertirlos en objetos JavaScript accesibles a través de req.body
app.use(cors()); // Habilitar el acceso cruzado entre dominios

// Definir una ruta POST para /register
app.post("/register", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud usando destructuring
  const { Nombre, Apellido, Correo, Telefono, Pais } = req.body;

  // Llamar a la función db.registrar() para insertar los datos en la base de datos
  db.registrar({ Nombre, Apellido, Correo, Telefono, Pais }, (error, results) => {
    // Si hay un error al insertar los datos, enviar una respuesta JSON con success: false
    if (error) {
      console.error("Error al insertar datos en la base de datos:", error);
      return res.json({ success: false });
    }

    // Si la inserción es exitosa, enviar una respuesta JSON con success: true
    console.log("Datos registrados correctamente:", results);
    res.json({ success: true });
  });

  // Mostrar información en la consola sobre los datos recibidos en la solicitud
  console.log("Datos recibidos:", req.body);
});



// Definir una ruta POST para /register
app.post("/registerA", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud usando destructuring
  const { Nombre, Marca, Fecha, Pais, Departamento } = req.body;

  // Llamar a la función db.registrar() para insertar los datos en la base de datos
  db.registrarA({ Nombre, Marca, Fecha, Pais, Departamento }, (error, results) => {
    // Si hay un error al insertar los datos, enviar una respuesta JSON con success: false
    if (error) {
      console.error("Error al insertar datos en la base de datos:", error);
      return res.json({ success: false });
    }

    // Si la inserción es exitosa, enviar una respuesta JSON con success: true
    alert("Datos registrados correctamente:", results);
    res.json({ success: true });
  });

  // Mostrar información en la consola sobre los datos recibidos en la solicitud
  console.log("Datos recibidos:", req.body);
});

app.post("/Consultar", (req, res) => {
  Consultar((error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.json({ success: false, error });
    }

    console.log("Datos consultados:", results);
    res.json({ success: true, data: results });
  });
});




// Escuchar en el puerto 3001
app.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});
