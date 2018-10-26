const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    name : String,
    description : String,
    priority : Number,
    dueto: String
});

module.exports = mongoose.model('Task', taskSchema);