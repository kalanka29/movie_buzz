import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListAddNewComponent } from './components/movie-list-add-new/movie-list-add-new.component';
import { MovieListViewComponent } from './components/movie-list-view/movie-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListViewComponent,
  },
  {
    path: 'add-new',
    component: MovieListAddNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListRoutingModule {}
