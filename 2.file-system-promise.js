// El módulo fs permite leer, escribir y manipular archivos en el sistema de archivos.
const fs = require("fs").promises;

// Asíncrono con promesas
console.log("Iniciando primera lectura del archivo con promesas ");

fs.readFile("archivo.txt", "utf-8").then((text) => {
  console.log("leyendo el texto del primer archivo con promesas ", text);
});
console.log("Iniciando segunda lectura del archivo con promesas ");

fs.readFile("archivo.txt", "utf-8").then((text) => {
  console.log("leyendo el texto del segundo archivo con promesas ", text);
});
