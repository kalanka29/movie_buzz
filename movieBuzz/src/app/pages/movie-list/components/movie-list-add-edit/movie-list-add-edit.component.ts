import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MOVIES_LIST } from 'src/app/shared/utils/movies';
import { Genre } from '../../../../shared/models/genre';
import { GENRES } from '../../../../shared/utils/genres';
import { MovieList } from '../../dto/movie-list';

@Component({
  selector: 'app-movie-list-add-edit',
  templateUrl: './movie-list-add-edit.component.html',
  styleUrls: ['./movie-list-add-edit.component.scss'],
})
export class MovieListAddEditComponent implements OnInit {
  public isNew: boolean;
  public movieAddEditFormGroup: FormGroup;
  sample: any = MOVIES_LIST;
  public genresList: Genre[] = GENRES;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.movieAddEditFormGroup = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(20)]],
      genres: [null, Validators.required],
      year: [null, [Validators.required, Validators.min(1900)]],
      cast: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }

  ngOnInit(): void {
    let routerParams: any = this.route.snapshot.queryParams;
    if (Object.keys(routerParams).length !== 0) {
      this.isNew = false;
      this.movieAddEditFormGroup.patchValue(routerParams);
    } else {
      this.isNew = true;
    }
  }

  goBackMovieListPage() {
    this.router.navigate(['/movie-list']);
  } // goBackMovieListPage()

  saveMovie(type: string) {
    let movie: MovieList = this.movieAddEditFormGroup.value;
    if (type === 'new') {
      this.sample.push(movie);
      this.router.navigate(['/movie-list']);
    }
  } // saveMovie()

  get cast(): any {
    return this.movieAddEditFormGroup.get('cast') as FormArray;
  } // get cast ()

  addNewCastField() {
    this.cast.push(this.formBuilder.control(''));
  }
}
