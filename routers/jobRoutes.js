const express = require('express');
const router = express.Router();
const { 
  createJob, 
  getJobs, 
  updateJob, 
  deleteJob 
} = require('../controllers/jobController');

// Create a job
router.post('/', createJob);

// Get all jobs for a user
router.get('/', getJobs);

// Update a job
router.put('/:id', updateJob);

// Delete a job
router.delete('/:id', deleteJob);

module.exports = router;


