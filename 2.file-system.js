// El módulo fs permite leer, escribir y manipular archivos en el sistema de archivos.
const fs = require("fs");

// Síncrono

// Escribir en un archivo
fs.writeFileSync("archivo.txt", "Hola, este es un archivo creado con Node.js");

console.log("Archivo creado correctamente");

// Leer un archivo
const contenido = fs.readFileSync("archivo.txt", "utf-8");
const stats = fs.statSync("archivo.txt", "utf-8");

console.log("Contenido del archivo:", contenido);
console.log("Es un fichero:", stats.isFile()); // si es un archivo
console.log("Es un directorio:", stats.isDirectory()); // si es un directorio
console.log("Tamaño del archivo:", stats.size); // tamaño en bytes

// Asíncrono
console.log("Iniciando primera lectura del archivo");

fs.readFile("archivo.txt", "utf-8", (err, text) => {
  // El tercer argumento es un callback,  son funciones que se ejecutan cuando se ejcuta una tarea asincrona
  console.log("leyendo el texto del primer archivo ", text);
});
console.log("Iniciando segunda lectura del archivo");

fs.readFile("archivo.txt", "utf-8", (err, text) => {
  console.log("leyendo el texto del segundo archivo ", text);
});

// Asíncrono con promesas
console.log("Iniciando primera lectura del archivo con promesas ");

fs.readFile("archivo.txt", "utf-8").then((text) => {
  console.log("leyendo el texto del primer archivo con promesas ", text);
});
console.log("Iniciando segunda lectura del archivo con promesas ");

fs.readFile("archivo.txt", "utf-8").then((text) => {
  console.log("leyendo el texto del segundo archivo con promesas ", text);
});
