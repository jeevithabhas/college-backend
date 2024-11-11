const express = require('express');
const { createPlacementDrive, getPlacementDrives } = require('../controllers/placementDriveController');
const router = express.Router();

router.post('/', createPlacementDrive);
router.get('/', getPlacementDrives);

module.exports = router;
