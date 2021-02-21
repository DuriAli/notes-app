import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
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

  handle_CreateListButtonClick() {
    
  }
}
