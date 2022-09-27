const getParent = require('../models/parent');

const parent = (req, res) => {
  res.render('parent', {parent: getParent});
}

module.exports = parent;
