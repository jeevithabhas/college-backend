const express = require('express');
const { createPlacementDrive, getPlacementDrives } = require('../controllers/placementDriveController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createPlacementDrive);
router.get('/', auth, getPlacementDrives);

module.exports = router;
