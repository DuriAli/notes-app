import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewNotePageComponent } from './pages/new-note-page/new-note-page.component';
import { NotesListPageComponent } from './pages/notes-list-page/notes-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists',
    component: HomePageComponent,
    children: [
      { path: '', component: NotesListPageComponent },
      { path: 'new-note', component: NewNotePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
