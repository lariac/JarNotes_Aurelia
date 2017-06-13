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
    console.log("El body es: " + req.body.noteTitle + " params es: ");
    const note = new Note(req.body);
    console.log('ENTREEEEEE');
    console.log('ADDDDDDD NOTE API');
    note.save(err => {
        if (!err) {
            console.log("NO TUVE ERRORES EN POST!");
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
    console.log("ESTOY EN DELETE!");
    console.log("id en delete es: " + req.body._id );
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