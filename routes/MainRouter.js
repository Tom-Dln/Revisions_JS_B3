import express from "express";
import homeController from "../controllers/home.js";
import studentController from "../controllers/student.js";
import studentsController from "../controllers/students.js";
import parentController from "../controllers/parent.js";
import parentsController from "../controllers/parents.js";
import lessonsController from "../controllers/lessons.js";
const router = express.Router();

// Déclaration de toute les routes
const MainRouter = () => {
  router.get("/", homeController);
  router.get("/student", studentController);
  router.get("/students", studentsController);
  router.get("/parent", parentController);
  router.get("/parents", parentsController);
  router.get("/lessons", lessonsController);
  // Confirmation d'accès au router
  console.log("Main router access");
};

export default MainRouter;
