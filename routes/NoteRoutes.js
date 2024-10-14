const express = require("express")
// import model
const app = express()
const noteModel = require('../models/NotesModel');
const mongoose = require("mongoose");



//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    const noteData = req.body
    console.log(noteData)

    try {
        // Create a new book instance
        const note = new noteModel(noteData)

        // save the book to MongoDB
        const newNote = await note.save()
        res.send(newNote);
        
    } catch(err){

        res.status(500).send({message: err.message})

    }

    //TODO - Write your code here to save the note
});


//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    noteModel.find().then( (notes)=>{

        res.send(notes)

    }).catch( (err)=> {

        res.status(500).send({message: err.message})

    })
    //TODO - Write your code here to returns all note
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    noteModel.findById(req.params.noteId).then((note) => {
        if (note) {
            res.send(note);
        } else {
            res.status(404).send({ message: "We cannot find note" });
        }
    }).catch((err) => {
        res.status(500).send({ message: err.message });
    });
    //TODO - Write your code here to return onlt one note using noteid
});



//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    noteModel.findByIdAndUpdate(req.params.noteId, req.body, {new:true}).then( (note)=> {
        if(note){
            res.send(note)
        }else{
            res.status(404).send({ message: "we can not find note" })
        }
    }).catch( (err)=>{
        res.status(500).send({message: err.message})
    })
    //TODO - Write your code here to update the note using noteid
});



//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    noteModel.findByIdAndDelete(req.params.noteId).then( (note)=> {
        if(note){
            res.send(note)
        }else{
            res.status(404).send({ message: "we can not find note" })
        }
    }).catch( (err)=>{
        res.status(500).send({message: err.message})
    })
    //TODO - Write your code here to delete the note using noteid
});


module.exports = app;