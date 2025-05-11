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

async function leerArchivo() {
  try {
    console.log("Iniciando método leerArchivo():");

    const data = await fs.readFile("archivo.txt", "utf8");
    console.log("Contenido:", data);
    console.log("Finalizando ejecución del método leerArchivo():");
  } catch (err) {
    console.error("Error al leer archivo:", err.message);
  }
}

leerArchivo();
