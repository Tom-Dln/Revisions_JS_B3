import getParent from "../models/parent.js";

const parentController = (req, res) => {
    res.render("parent", { parent: getParent });
};

// module.exports = parent;
export default parentController;
