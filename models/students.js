const fs = require("fs");

let BDD = fs.readFileSync("./BDD.json");
let students = JSON.parse(BDD).students;

export default getStudents;
