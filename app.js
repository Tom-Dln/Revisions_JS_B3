import * as dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";
import express from "express";
import exphbs from "express-handlebars";
import morgan from "morgan";
import MainRouter from "./routes/MainRouter.js";

// Système de secours :
// =======================
import getStudent from "./models/student.js";
import getStudents from "./models/students.js";
import getParent from "./models/parent.js";
import getParents from "./models/parents.js";
import getLessons from "./models/lessons.js";
// =======================

const app = express();

//Configuration :
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(morgan("tiny"));
app.use(express.static("public"));

// Système principal :
// =======================
// app.use(MainRouter);
// =======================

// Système de secours :
// =======================
app.get("/", (req, res) => {
  res.render("home", {
    title: "Portail de Vie Scolaire",
    students: getStudents(),
    parents: getParents(),
    lessons: getLessons(),
  });
});
app.get("/student/:id", (req, res) => {
  res.render("student", { student: getStudent(req.params.id) });
});

app.get("/students", (req, res) => {
  res.render("students", { students: getStudents() });
});

app.get("/parent/:id", (req, res) => {
  res.render("parent", { parent: getParent(req.params.id) });
});

app.get("/parents", (req, res) => {
  res.render("parents", { parents: getParents() });
});

app.get("/lessons", (req, res) => {
  res.render("lessons", { lessons: getLessons() });
});

// ======================

// Alerte application allumé :
app.listen(process.env.PORT, (err) => {
  // Afficher une erreur :
  if (err) {
    console.log(
      chalk.hex("#FFF").bgHex("#DC143C").bold(`Erreur pendant le démarrage !`)
    );
    console.log(chalk.red(err));
  } else {
    // Afficher la réussite du démarrage :
    console.log(
      chalk
        .hex("#FFFFFF")
        .bgHex("#6B8E23")
        .bold(`Accédez à l'application : http://localhost:${process.env.PORT}`)
    );
  }
});
