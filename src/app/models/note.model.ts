export class NoteModel {
  constructor(private _noteTitle: string, private _noteBody: string) {}

  get noteTitle(): string {
    return this._noteTitle;
  }

  get noteBody(): string {
    return this._noteBody;
  }
}
