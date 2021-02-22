import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  @Input() title: String = '';
  @Output() submitButton = new EventEmitter<{}>();
  @Output() cancelButton = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  cancelButtonClick() {
    this.cancelButton.emit();
  }

  submitButtonClick(noteTitle: string, noteBody: string) {
    console.log(noteTitle, noteBody);
    this.submitButton.emit({ noteTitle, noteBody });
  }
}
