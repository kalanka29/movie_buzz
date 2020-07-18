import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-add-new',
  templateUrl: './movie-list-add-new.component.html',
  styleUrls: ['./movie-list-add-new.component.scss']
})
export class MovieListAddNewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goBackMovieListPage(){
      this.router.navigate(['/movie-list']);
  }

}
