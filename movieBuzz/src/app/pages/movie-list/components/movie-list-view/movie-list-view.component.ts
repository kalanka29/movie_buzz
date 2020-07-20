import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MOVIES_LIST } from '../../../../shared/utils/movies';
import { MovieList } from '../../dto/movie-list';
import { MovieListService } from '../../services/movie-list.service';
@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.scss'],
})
export class MovieListViewComponent implements OnInit {
  public movieList: MovieList[];

  public displayedColumns: string[] = [
    'title',
    'genre',
    'year',
    'cast',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource<MovieList>(MOVIES_LIST);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private movieListService: MovieListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieListService.getAllMovies().subscribe(
      (res: any) => {
        console.log(res);
        // this.movieList = res;
        // console.log(this.movieList);
        // this.dataSource = new MatTableDataSource<MovieList>(this.movieList);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteMovie(movie: MovieList) {
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
