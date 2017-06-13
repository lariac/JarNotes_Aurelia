import { Note } from './note';
import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
let httpClient = new HttpClient();

export class App {
  constructor(http) {
    this.heading = "Notes";
    this.notes = [];
    this.noteTitle = '';
    this.noteDescription = '';
    this.editEvent = false;
    this.noteEdited = '';
  }
  configureRouter(config, router) {
    config.title = '';
    config.map([
      { route: ['', 'notes'], name: 'notes', moduleId: './components/notes/notes', nav: true, title: 'Notes', settings: { imagePath: '../src/images/notes-button.svg' } },
      { route: 'tags', name: 'tags', moduleId: './components/tags/tags', nav: true, title: 'Tags', settings: { imagePath: '../src/images/tag-button.svg' } },
      { route: 'notebooks', name: 'notebooks', moduleId: './components/notebooks/notebooks', nav: true, title: 'Notebooks', settings: {  imagePath: '../src/images/folder-button.svg' } },
    ]);

    this.router = router;
  }

  //Method to get all the notes
  getNotes() {
    httpClient.fetch('http://localhost:3000/api/notes/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          this.notes = [];
          for (let i = 0; i < data.length; ++i) {
            this.notes.push(new Note(data[i].noteTitle, data[i].noteContent, data[i]._id));
          }

        }
      });
  }

  //Method to save a note
  saveNote() {
    if (this.editEvent === true) { //Check if the event is an edit or an add
      this.updateNote();
      this.editEvent = false;
    }
    else {
      this.addNote();
    }
  }

  //Method to add a note
  addNote() {
    const newNote = { noteTitle: this.noteTitle, noteContent: this.noteDescription, folderId: '' }
    const urlNotes = 'http://localhost:3000/api/notes';

    httpClient.fetch(urlNotes, {
      method: "POST",
      body: json(newNote)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (this.noteDescription) {
          this.notes.push(new Note(this.noteTitle, this.noteDescription, data._id));
          this.noteDescription = '';
          this.noteTitle = '';
        }
      });
  }


  // Method to remove a note
  removeNote(note) {
    let index = this.notes.indexOf(note); //Get the index of the note
    const urlNotes = 'http://localhost:3000/api/notes/' + note._id;
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
    httpClient.fetch(urlNotes, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }


  //Method to update a note
  updateNote() {
    this.noteEdited.title = this.noteTitle;
    this.noteEdited.description = this.noteDescription;
    this.noteTitle = '';
    this.noteDescription = '';
    const urlNotes = 'http://localhost:3000/api/notes/'
    const updateNote = { _id: this.noteEdited._id, noteTitle: this.noteEdited.title, noteContent: this.noteEdited.description, folderId: '' }
    httpClient.fetch(urlNotes, {
      method: "PUT",
      body: json(updateNote)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  //Edit a note
  editNote(note) {
    this.editEvent = true;
    this.noteTitle = note.title;
    this.noteDescription = note.description;
    this.noteEdited = note;
  }


}
