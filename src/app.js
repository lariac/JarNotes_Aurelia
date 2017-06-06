import {Note} from './note';

export class App {
  constructor() {
    this.heading = "Notes";
    this.notes = [];
    this.noteTitle = '';
    this.noteDescription = '';
  }

  // Add a note
  addNote() {
    if (this.noteDescription) {
      this.notes.push(new Note(this.noteTitle, this.noteDescription));
      this.noteDescription = '';
      this.noteTitle = '';
    }
  }
 
 // Remove a note
  removeNote(note) {
    let index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  // Update  a note  


}