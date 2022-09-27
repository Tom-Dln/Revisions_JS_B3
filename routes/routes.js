const express = require('express');
const homeController = require('../controllers/home');
const studentController = require('../controllers/student');
const studentsController = require('../controllers/students');
const parentController = require('../controllers/parent');
const parentsController = require('../controllers/parents');
const lessonsController = require('../controllers/lessons');

const router = express.Router();

// Declaring Routes
router.get('/', homeController);
router.get('/student', studentController);
router.get('/students', studentsController);
router.get('/parent', parentController);
router.get('/parents', parentsController);
router.get('/lessons', lessonsController);

module.exports = router;
