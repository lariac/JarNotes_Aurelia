const express = require('express');
const router = express.Router();
const noteAPI =  require('../controllers/notesController');
const tagController =  require('../controllers/tagsController');
const foldersController =  require('../controllers/foldersController');

router.get('/notes', noteAPI.getNotes);
router.post('/notes', noteAPI.addNote);
router.put('/notes', noteAPI.updateNote);
router.delete('/notes', noteAPI.deleteNote);

router.get('/tags', tagController.getTags);
router.post('/tags', tagController.addTag);
router.put('/tags', tagController.updateTag);
router.delete('/tags', tagController.deleteTag);

router.get('/folders', foldersController.getFolders);
router.get('/folders/:_id', foldersController.getFolderById);
router.post('/folders', foldersController.addFolder);
router.put('/folders', foldersController.updateFolder);
router.delete('/folders', foldersController.deleteFolder);



module.exports = router;