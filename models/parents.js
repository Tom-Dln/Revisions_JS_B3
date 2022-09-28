import fs from "fs";

const getParents = () => {
  let BDD = fs.readFileSync("./BDD.json");
  let parents = JSON.parse(BDD).parents;
  return parents;
};
export default getParents;
