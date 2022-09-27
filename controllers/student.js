const getStudent = require('../models/student');
const getAStudent = require('../models/getJson');


const student = (req, res) => {
  res.render('student', {student: getAStudent(5)});
}

module.exports = student;
