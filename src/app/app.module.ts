import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotesListPageComponent } from './pages/notes-list-page/notes-list-page.component';
import { NewNotePageComponent } from './pages/new-note-page/new-note-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotesListPageComponent,
    NewNotePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
