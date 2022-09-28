import getParents from "../models/parents.js";

const parentsController = (req, res) => {
  res.render("parents", { parents: getParents });
};

// module.exports = parents;
export default parentsController;
