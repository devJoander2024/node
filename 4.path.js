const fs = require("fs");
const path = require("node:path");

console.log(path.sep);

const filePath = path.join("./", "home", "files");
console.log(filePath);

const file = process.argv[2];
function printMetadata(file) {
  const fileStats = fs.statSync(file);
  console.log(fileStats);
}
printMetadata(file);
