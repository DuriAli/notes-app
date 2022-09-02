import { Injectable } from '@angular/core';
import { NoteModel } from '../models/note.model';
import { WebReqService, WebResponse } from './web-req.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private webReqService: WebReqService) {}

  getNotes(): Promise<any[]> {
    return this.webReqService
      .get('')
      .toPromise()
      .then((response: WebResponse) => {
        console.log(response);
        return response.data;
      });
  }

  createNoteItem(noteItem: NoteModel): Promise<WebResponse> {
    return this.webReqService
      .post('', noteItem)
      .toPromise()
      .then((response: WebResponse) => {
        console.log(response);
        return response;
      });
  }
}
