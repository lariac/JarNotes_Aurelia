const mongoose = require('mongoose');
const folderSchema = new mongoose.Schema({
    name:{
        type: String,
    }
});

module.exports = mongoose.model('Folder', folderSchema);