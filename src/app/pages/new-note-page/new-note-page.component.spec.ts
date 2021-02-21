import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotePageComponent } from './new-note-page.component';

describe('NewNotePageComponent', () => {
  let component: NewNotePageComponent;
  let fixture: ComponentFixture<NewNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNotePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
