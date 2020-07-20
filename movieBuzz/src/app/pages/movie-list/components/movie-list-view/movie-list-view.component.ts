import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MOVIES_WITH_IDS } from '../../../../shared/utils/movie-ids';
import { MovieList } from '../../dto/movie-list';
@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.scss'],
})
export class MovieListViewComponent implements OnInit {
  public defaultMovieList: any[] = [];
  public movieList: MovieList[] = MOVIES_WITH_IDS;
  public displayedColumns: string[] = [
    'title',
    'genre',
    'year',
    'cast',
    'edit',
    'delete',
  ];

  dataSource = new MatTableDataSource<MovieList>(this.defaultMovieList);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<MovieList>(this.movieList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteMovie(movie: MovieList) {
    this.movieList.slice(movie.id, 1);
  } //deleteMovie()

  editMovie(movie: MovieList) {
    this.router.navigate(['/movie-list/add-edit'], { queryParams: movie });
  } // editMovie()

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } // applyFilter()

  addNewMovie() {
    this.router.navigate(['/movie-list/add-edit']);
  } // addNewMovie()
} // class
