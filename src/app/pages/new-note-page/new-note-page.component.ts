import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/models/note.model';

@Component({
  selector: 'app-new-note-page',
  templateUrl: './new-note-page.component.html',
  styleUrls: ['./new-note-page.component.scss'],
})
export class NewNotePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancelButtonClick() {
    this.router.navigate(['/']);
  }

  submitButtonClick(event: any) {
    console.log('Clicked the new note page button submit');
    console.log(event.noteBody);
  }
}
