import fs from "fs";

const getStudent = (studentId) => {
    let BDD = fs.readFileSync("./BDD.json");
    let students = JSON.parse(BDD).students;
    let student = students.find(element => element.id == studentId);
    console.log(student);
    return student;
};

export default getStudent;
