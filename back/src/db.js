// Importamos el módulo 'mysql' para interactuar con la base de datos MySQL
const mysql = require("mysql");

// Creamos una conexión a la base de datos MySQL con la configuración apropiada
const connection = mysql.createConnection({
  host: "localhost", // Dirección del servidor de la base de datos
  user: "root",      // Usuario de la base de datos
  password: "",      // Contraseña de la base de datos
  database: "react"  // Nombre de la base de datos a la que queremos conectarnos
});

// Definimos la función 'registrar' que insertará los datos recibidos en la tabla 'datosregistro'
function registrar(datos, callback) {
  // Extraemos los datos individuales del objeto 'datos' usando destructuring
  const { Nombre, Apellido, Correo, Telefono, Pais } = datos;

  // Creamos la consulta SQL con marcadores de posición ('?') para los valores a insertar
  const sql = `INSERT INTO datosregistro (Nombre, Apellido, Correo, Telefono, Pais) VALUES (?, ?, ?, ?, ?)`;

  // Ejecutamos la consulta SQL, pasando los valores reales en un arreglo como segundo argumento
  connection.query(sql, [Nombre, Apellido, Correo, Telefono, Pais], (error, results, fields) => {
    // Si hay un error en la consulta, llamamos a la función 'callback' con el error
    if (error) return callback(error);
    
    // Si la consulta se ejecutó exitosamente, llamamos a la función 'callback' con los resultados
    // y pasamos 'null' como primer argumento para indicar que no hay error.
    callback(null, results);
  });
}

// Definimos la función 'registrar' que insertará los datos recibidos en la tabla 'datosregistro'
function registrarA(datos, callback) {
  // Extraemos los datos individuales del objeto 'datos' usando destructuring
  const { Nombre, Marca, Fecha, Pais, Departamento } = datos;

  // Creamos la consulta SQL con marcadores de posición ('?') para los valores a insertar
  const sql = `INSERT INTO registrorepuestos (Nombre, Marca, Fecha, Pais, Departamento) VALUES (?, ?, ?, ?, ?)`;

  // Ejecutamos la consulta SQL, pasando los valores reales en un arreglo como segundo argumento
  connection.query(sql, [Nombre, Marca, Fecha, Pais, Departamento], (error, results, fields) => {
    // Si hay un error en la consulta, llamamos a la función 'callback' con el error
    if (error) return callback(error);
    
    // Si la consulta se ejecutó exitosamente, llamamos a la función 'callback' con los resultados
    // y pasamos 'null' como primer argumento para indicar que no hay error.
    callback(null, results);
  });
}

// Establecemos la conexión a la base de datos
connection.connect((err) => {
  // Si hay un error en la conexión, lanzamos una excepción con el mensaje de error
  if (err) throw err;
  
  // Si la conexión es exitosa, imprimimos un mensaje de éxito en la consola
  console.log("Base de Datos Conectada Correctamente!!");
});

// Exportamos la función 'registrar' para que pueda ser utilizada en otros archivos
module.exports = {
  registrar: registrar,
  registrarA: registrarA
};
