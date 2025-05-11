const http = require("http");

// Creamos el servidor
const server = http.createServer((req, res) => {
  // Configuramos la cabecera
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Respondemos al cliente
  res.end("¡Hola desde Node.js!\n");
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
