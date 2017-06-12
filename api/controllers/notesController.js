const mongoose = require('mongoose');
const Note = require('../models/Note');


// get Notes
function getNotes(req, res) {
    Note.find().exec(function (err, data) {
        if (!err) {
            res.status(200);
            res.json(data);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
};

//post Note
function addNote(req, res) {
    const note = new Note(req.body);
    note.save(err => {
        if (!err) {
            res.status(201);
            res.json(note);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}

//put Note
function updateNote(req, res) {
    Note.findOneAndUpdate({ _id: req.body._id }, req.body, (err, note) => {
        if (!err) {
            res.status(201);
            res.json(note);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}

//delete Note
function deleteNote (req, res) {
    Note.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
    if (!err) {
      res.status(204);
      res.json(data);
    }
    else {
      res.status(500);
      res.json(err);
    }
  });
};

const actions = {
    getNotes,
    addNote,
    updateNote,
    deleteNote
}

module.exports = actions;




//:puerto/api/notes/