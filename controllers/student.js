// const getStudent = require('../models/student');
const getAStudent = require('../models/getJson');


const student = (req, res) => {
  the_student = getAStudent.find(element => element.id == 11);
  console.log(the_student);
  res.render('student', {the_student: the_student});
}



module.exports = student;
