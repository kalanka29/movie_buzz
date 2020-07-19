import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MovieListAddEditComponent } from './components/movie-list-add-edit/movie-list-add-edit.component';
import { MovieListViewComponent } from './components/movie-list-view/movie-list-view.component';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { MovieListService } from './services/movie-list.service';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListAddEditComponent,
    MovieListViewComponent,
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    FlexLayoutModule,
    // material
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
  ],
  providers: [MovieListService],
})
export class MovieListModule {}
