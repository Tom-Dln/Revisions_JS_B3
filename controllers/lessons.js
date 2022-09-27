const getLessons = require('../models/lessons');

const lessons = (req, res) => {
  res.render('lessons', {lessons: getLessons});
}

module.exports = lessons;
