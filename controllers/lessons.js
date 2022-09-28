import getLessons from "../models/lessons.js";

const lessonsController = (req, res) => {
    res.render("lessons", { lessons: getLessons });
};

// module.exports = lessons;
export default lessonsController;
