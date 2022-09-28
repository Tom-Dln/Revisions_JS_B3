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
  res.render("home", { title: "Portail de Vie Scolaire" });
});

app.get('/student/:id', (req, res) => {
  let student = getStudent(req.params.id);
  res.render("student", { student });
});

app.get("/students", (req, res) => {
  let students = getStudents();
  res.render("students", { students });
});

app.get('/parent/:id', (req, res) => {
  let parent = getParent(req.params.id);
  res.render("parent", { parent });
});

app.get("/parents", (req, res) => {
  let parents = getParents();
  res.render("parents", { parents });
});

app.get("/lessons", (req, res) => {
  let lessons = getLessons();
  res.render("lessons", { lessons });
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
