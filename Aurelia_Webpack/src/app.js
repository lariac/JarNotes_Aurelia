import { Note } from './note';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
let httpClient = new HttpClient();

export class App {
  constructor(http) {
    this.heading = "Notes";
    this.notes = [];
    this.noteTitle = '';
    this.noteDescription = '';
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
  addNote() {
    const newNote = { noteTitle: this.noteTitle, noteContent: this.noteDescription, folderId: '' }
     
    const urlNotes = 'http://localhost:3000/api/notes';
    if (this.noteDescription) {
      this.notes.push(new Note(this.noteTitle, this.noteDescription));
      this.noteDescription = '';
      this.noteTitle = '';
    }
    console.log('newNOTE  ' + newNote);
    console.log(newNote);
    console.log('stringtify '+JSON.stringify(newNote));
    httpClient.fetch(urlNotes, {
      method: "POST",
         body: JSON.stringify(newNote)
      })
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }


  // Remove a note
  removeNote(note) {
    let index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }




}
