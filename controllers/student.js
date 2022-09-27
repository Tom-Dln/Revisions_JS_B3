const getStudent = require('../models/student');

const student = (req, res) => {
  res.render('student', {student: getStudent});
}

module.exports = student;
