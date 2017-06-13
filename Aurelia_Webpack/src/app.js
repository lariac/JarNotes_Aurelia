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
      { route: ['', 'notes'], name: 'notes', moduleId: './components/notes/notes', nav: true, title: 'Notes', settings: '../src/images/notes-button.svg' },
      { route: 'tags', name: 'tags', moduleId: './components/tags/tags', nav: true, title: 'Tags', settings: '../src/images/tag-button.svg' },
      { route: 'notebooks', name: 'notebooks', moduleId: './components/notebooks/notebooks', nav: true, title: 'Notebooks', settings: '../src/images/folder-button.svg' },
    ]);

    this.router = router;
  }

  // Add a note
  saveNote() {
    console.log("ENTRE A SAVE NOTE! CON EDIT EVENT EN: " + this.editEvent);
    if(this.editEvent===true){
      this.updateNote();
       console.log("ENTRE A UPDATE NOTE!");
      this.editEvent = false;
    }
    else{
      console.log("ENTRE A ADD NOTE!");
      this.addNote();
    }
  }

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


<<<<<<< HEAD
  // Remove a note
   removeNote(note) {
    let index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    } 
    console.log('NOTE ID: ');
    console.log(note._id);
    const urlNotes = 'http://localhost:3000/api/notes/'+ note._id;
      httpClient.fetch(urlNotes, {
         method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }
=======
  //Remove a note
  removeNote(note) {
    console.log("El id de la nota es: " + note._id);
    let index = this.notes.indexOf(note);
    const deleteNote = { _id: note._id };
    const urlNotes = 'http://localhost:3000/api/notes';

    httpClient.fetch(urlNotes, {
      method: "DELETE",
      body: { data: note._id }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (index !== -1) {
          this.notes.splice(index, 1);
        }
      });
  }

  //Update a note
  updateNote() {
    this.noteEdited.title = this.noteTitle;
    this.noteEdited.description = this.noteDescription;
    this.noteTitle='';
    this.noteDescription= '';
  /*  const updateNote = { noteTitle: note.noteTitle, noteContent: note.noteDescription, folderId: '' }
    httpClient.fetch(urlNotes, {
      method: "PUT",
      body: { data: note._id }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (index !== -1) {
          this.notes.splice(index, 1);
        }
      }); */

  } 

  //Edit a note
  editNote(note){
    this.editEvent = true;
    this.noteTitle = note.title;
    this.noteDescription = note.description;
    this.noteEdited = note;
  }
>>>>>>> d909f38193bffda3a0be03bef03ba98925bd59b9




}
