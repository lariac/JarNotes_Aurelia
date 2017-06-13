export class Note {
  constructor(title, description, id) {
    this.title = title;
    this.description = description;
    this._id = id;
    this.done = false;
  }
}


