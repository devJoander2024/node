import { readFile } from "node:fs/promises";
// El módulo fs permite leer, escribir y manipular archivos en el sistema de archivos.

// Asíncrono con promesas
console.log("Iniciando primera lectura del archivo con promesas ");
const text = await readFile("archivo.txt", "utf-8");
console.log("leyendo el texto del primer archivo con async await ", text);
