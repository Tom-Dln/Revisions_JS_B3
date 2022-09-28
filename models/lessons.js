const fs = require("fs");

let BDD = fs.readFileSync("./BDD.json");
let lessons = JSON.parse(BDD).lessons;

export default getLessons;
