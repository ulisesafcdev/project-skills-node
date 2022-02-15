const mongoose = require('mongoose');
const { Schema } = mongoose;

const AllSkillsSchema = new Schema({
    nombre: String,
    nivel:String
})

const AllSkillsModel = mongoose.model('allskills', AllSkillsSchema);

module.exports = AllSkillsModel;