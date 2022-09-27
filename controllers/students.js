const getStudents = require('../models/students');

const students = (req, res) => {
  res.render('students', {students: getStudents});
}

module.exports = students;
