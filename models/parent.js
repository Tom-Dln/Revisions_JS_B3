import fs from "fs";

const getParent = (parentId) => {
    let BDD = fs.readFileSync("./BDD.json");
    let parents = JSON.parse(BDD).parents;
    let parent = parents.find(element => element.id == parentId)
    console.log(parent);
    return parent;
}

export default getParent;
