import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListAddEditComponent } from './components/movie-list-add-edit/movie-list-add-edit.component';
import { MovieListViewComponent } from './components/movie-list-view/movie-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListViewComponent,
  },
  {
    path: 'add-edit',
    component: MovieListAddEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListRoutingModule {}
