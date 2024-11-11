const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    jobTitle: { type: String, required: true },
    description: String,
    requirements: String
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
