const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Get all courses
router.get('/getcourses', courseController.getAllCourses);

// Get a specific course by ID
router.get('/getcourses/:id', courseController.getCourse);

// Create a new course
router.post('/addCourse', courseController.createCourse);

// Update an existing course
router.put('/updateCourse/:id', courseController.updateCourse);

// Delete a course
router.delete('/deleteCourse/:id', courseController.deleteCourse);

module.exports = router;   
