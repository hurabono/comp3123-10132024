const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: String,
    priority: {
        type: String,
        lowercase: true
    },
    dateAdded:{
        type: Date,
        default: Date.now
    },
    dateUpdated: {  
        type: Date,
        default: Date.now
    }
});

// export model

// define the shema -> create model -> use the model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
