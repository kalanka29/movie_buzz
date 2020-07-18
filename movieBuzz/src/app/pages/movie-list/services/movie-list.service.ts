import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MovieList } from '../dto/movie-list';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  apiUrl: string =
    'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json';
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<MovieList[]> {
    return this.http.get<MovieList[]>(this.apiUrl).pipe(take(1));
  } // getAllMovies()
}
