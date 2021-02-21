import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
  notes: NoteModel[] = [];

  constructor() {
    this.notes = [
      new NoteModel(
        'First Note',
        'dkjafjlkdfjksdfjlk;dfjlkasdfjaskfjaskdfjslkdfjlk;sdfjlks;dfjlksdfjlksdfjlk;asdjflkasdjflksdfjlkasdfjlkasdjflksdjflksdjflkasdjflksdjflksdjdflkasdjsgfklnsdvklnxcvlkhkfkhjsdlkfjlksdfjkdjflkdjdakjgasdgjafk'
      ),
      new NoteModel(
        'Second Note',
        'dkjafjlkdfjksdfjlk;dfjlkasdfjaskfjaskdfjslkdfjlk;sdfjlks;dfjlksdfjlksdfjlk;asdjflkasdjflksdfjlkasdfjlkasdjflksdjflksdjflkasdjflksdjflksdjdflkasdjsgfklnsdvklnxcvlkhkfkhjsdlkfjlksdfjkdjflkdjdakjgasdgjafk'
      ),
      new NoteModel(
        'Third Note',
        'dkjafjlkdfjksdfjlk;dfjlkasdfjaskfjaskdfjslkdfjlk;sdfjlks;dfjlksdfjlksdfjlk;asdjflkasdjflksdfjlkasdfjlkasdjflksdjflksdjflkasdjflksdjflksdjdflkasdjsgfklnsdvklnxcvlkhkfkhjsdlkfjlksdfjkdjflkdjdakjgasdgjafk'
      ),
      new NoteModel(
        'Fourth Note',
        'dkjafjlkdfjksdfjlk;dfjlkasdfjaskfjaskdfjslkdfjlk;sdfjlks;dfjlksdfjlksdfjlk;asdjflkasdjflksdfjlkasdfjlkasdjflksdjflksdjflkasdjflksdjflksdjdflkasdjsgfklnsdvklnxcvlkhkfkhjsdlkfjlksdfjkdjflkdjdakjgasdgjafk'
      ),
    ];
  }

  ngOnInit(): void {}

  handle_CreateListButtonClick() {}
}
