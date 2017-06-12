const mongoose = require('mongoose');
const Folder = require('../models/Folder');


// get Folders
function getFolders(req, res) {
  console.log('get folderss!!');
  Folder.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

//post Folder
function addFolder(req, res) {
  console.log('Post: Create folder!!');
  const folder = new Folder(req.body);
  folder.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(folder);
    }
  });
};


//put folder
function updateFolder(req, res) {
    Folder.findOneAndUpdate({ _id: req.body._id }, req.body, (err, folder) => {
        if (!err) {
            res.status(201);
            res.json(folder);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}


//delete folder
function deleteFolder (req, res) {
    Folder.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
      if (!err) {
            res.status(201);
            res.json(data);
        }
        else {
            res.status(404);
            res.json(err);
        }
  });
};

//get folder by Id
function getFolderById(req, res) {
  console.log("params es: " + req.params._id);
 Folder.findById({ _id: req.params._id }, req.body, (err, data) => {
      if (!err) {
            res.status(201);
            res.json(data);
        }
        else {
            res.status(404);
            res.json(err);
        }
  });
};



const actions = {
    getFolders,
    addFolder,
    updateFolder,
    deleteFolder,
    getFolderById
}

module.exports = actions;

