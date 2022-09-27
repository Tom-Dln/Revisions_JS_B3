const getStudent = require('../models/student');
const getAStudent = require('../models/getJson');


const student = (req, res) => {
  res.render('student', {student: getAStudent, student_id: 1});
}

module.exports = student;
