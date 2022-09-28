import fs from "fs";

const getStudents = () => {
    let BDD = fs.readFileSync("./BDD.json");
    let students = JSON.parse(BDD).students;
    return students;
};

export default getStudents;
