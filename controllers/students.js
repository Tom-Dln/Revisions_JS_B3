import getStudents from "../models/students.js";

const studentsController = (req, res) => {
    res.render("students", { students: getStudents });
};

// module.exports = students;
export default studentsController;
