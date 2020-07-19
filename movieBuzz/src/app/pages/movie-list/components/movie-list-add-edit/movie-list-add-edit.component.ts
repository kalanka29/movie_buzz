import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-list-add-edit',
  templateUrl: './movie-list-add-edit.component.html',
  styleUrls: ['./movie-list-add-edit.component.scss']
})
export class MovieListAddEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBackMovieListPage(){
    this.router.navigate(['/movie-list']);
  }
}
