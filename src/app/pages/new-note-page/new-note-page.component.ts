import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-new-note-page',
  templateUrl: './new-note-page.component.html',
  styleUrls: ['./new-note-page.component.scss'],
})
export class NewNotePageComponent implements OnInit {
  constructor(private router: Router, private notesService: NotesService) {}

  ngOnInit(): void {}

  cancelButtonClick() {
    this.router.navigate(['/']);
  }

  submitButtonClick(event: any) {
    this.notesService.createNoteItem(event);
    this.router.navigate(['/']);
  }
}
