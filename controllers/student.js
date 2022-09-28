import getStudent from "../models/student.js";

const studentController = (req, res) => {
  res.render("student", { student: getStudent });
};

// module.exports = student;
export default studentController;
