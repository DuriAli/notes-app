import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
  notes: NoteModel[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes().then((response) => {
      this.notes = response;
    });
  }

  handle_CreateListButtonClick() {}
}
