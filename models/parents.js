const fs = require("fs");

let BDD = fs.readFileSync("./BDD.json");
let parents = JSON.parse(BDD).parents;

export default getParents;
