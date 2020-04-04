const express = require('express')
const router = express.Router()
const caseController = require('../controllers/caseController')

// Add different routes here
router.get('/get-all', caseController.getCases)

module.exports = router
