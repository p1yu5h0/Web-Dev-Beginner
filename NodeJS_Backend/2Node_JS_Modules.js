//https://nodejs.org/api/fs.html
//these all functions and modules are to be seen and searched everytime to perform any specific work
//it have some specific functions to make our work more easier 
const fs = require("fs");
let text = fs.readFileSync("2random.txt", "utf-8");
text = text.replace("node", "Piyush");
console.log("The content of the file is");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("2piyush.txt", text);