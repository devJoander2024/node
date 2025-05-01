// El módulo OS en Node.j es un módulo nativo que proporciona información detallada sobre el hardware y el sistema operativo en el que se está ejecutando la aplicación.
const os = require("node:os");

console.log("Información del Sistema Operativo del host: ", os.hostname());
console.log("--------------------------------------------");
console.log("Nombre del Sistema Operativo: ", os.platform());
console.log("Versión del Sistema Operativo: ", os.release());
console.log("Arquitectura del Sistema Operativo: ", os.arch());
console.log("Memoria libre: ", os.freemem());
console.log("Memoria total: ", os.totalmem());
console.log("Total CPU's: ", os.cpus().length);
console.log("CPU's: ", os.cpus());

let x = 5;
let y = x;
y = 10;
console.log(x);
