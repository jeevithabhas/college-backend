const PlacementDrive = require('../models/placementDriveModel');
const mongoose = require('mongoose');

const createPlacementDrive = async (req, res) => {
    try {
        const { name, date, participants } = req.body;
        if (!date) {
            return res.status(400).json({ message: "Date is required." });
        }
        const participantsObjectIds = participants.map(id => new mongoose.Types.ObjectId(id));
        
        const newDrive = new PlacementDrive({ name, date, participants: participantsObjectIds });
        await newDrive.save();

        res.status(201).json(newDrive);
    } catch (error) {
        console.error("Error creating placement drive:", error);
        res.status(400).json({ message: error.message });
    }
};

const getPlacementDrives = async (req, res) => {
    const drives = await PlacementDrive.find().populate('participants');
    res.json(drives);
};

module.exports = { createPlacementDrive, getPlacementDrives };
