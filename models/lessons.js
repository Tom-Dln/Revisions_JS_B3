import fs from "fs";

const getLessons = () => {
    let BDD = fs.readFileSync("./BDD.json");
    let lessons = JSON.parse(BDD).lessons;
    return lessons;
};

export default getLessons;
