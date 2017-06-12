const mongoose = require('mongoose');
const Tag = require('../models/Tag');

// get Tags
function getTags(req, res) {
    Tag.find().exec(function (err, data) {
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


//post Tag
function addTag(req, res) {
    const tag = new Tag(req.body);
    tag.save(err => {
        if (!err) {
            res.status(201);
            res.json(tag);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}


//put Tag
function updateTag(req, res) {
    Tag.findOneAndUpdate({ _id: req.body._id }, req.body, (err, tag) => {
        if (!err) {
            res.status(201);
            res.json(tag);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}


//delete Tag
function deleteTag (req, res) {
    Tag.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
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
    getTags,
    addTag,
    updateTag,
    deleteTag
}

module.exports = actions;

