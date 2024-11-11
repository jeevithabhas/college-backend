const mongoose = require('mongoose');

const placementDriveSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const PlacementDrive = mongoose.models.PlacementDrive || mongoose.model('PlacementDrive', placementDriveSchema);
module.exports = PlacementDrive;
