// El módulo OS en Node.j proporciona información detallada sobre el hardware y el sistema operativo en el que se está ejecutando la aplicación.
import {
  hostname,
  platform,
  release,
  arch,
  freemem,
  totalmem,
  cpus,
} from "node:os";

console.log("Información del Sistema Operativo del host: ", hostname());
console.log("--------------------------------------------");
console.log("Nombre del Sistema Operativo: ", platform());
console.log("Versión del Sistema Operativo: ", release());
console.log("Arquitectura del Sistema Operativo: ", arch());
console.log("Memoria libre: ", freemem());
console.log("Memoria total: ", totalmem());
console.log("Total CPU's: ", cpus().length);
console.log("CPU's: ", cpus());
