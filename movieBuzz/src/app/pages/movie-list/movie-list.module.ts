import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MovieListAddNewComponent } from './components/movie-list-add-new/movie-list-add-new.component';
import { MovieListViewComponent } from './components/movie-list-view/movie-list-view.component';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListService } from './services/movie-list.service';

@NgModule({
  declarations: [MovieListViewComponent, MovieListAddNewComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    FlexLayoutModule,
    // material
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [MovieListService],
})
export class MovieListModule {}
