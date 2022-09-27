const getParents = require('../models/parents');

const parents = (req, res) => {
  res.render('parents', {parents: getParents});
}

module.exports = parents;
