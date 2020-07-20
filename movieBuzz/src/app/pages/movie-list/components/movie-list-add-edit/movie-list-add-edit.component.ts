import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MOVIES_WITH_IDS } from 'src/app/shared/utils/movie-ids';
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
  sample: any = MOVIES_WITH_IDS;
  public genresList: Genre[] = GENRES;
  routerParams: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.movieAddEditFormGroup = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required, Validators.maxLength(20)]],
      genres: [null, Validators.required],
      year: [null, [Validators.required, Validators.min(1900)]],
      cast: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }

  ngOnInit(): void {
    this.routerParams = this.route.snapshot.queryParams;
    if (Object.keys(this.routerParams).length !== 0) {
      this.isNew = false;
      this.movieAddEditFormGroup.patchValue(this.routerParams);
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
      movie.id = this.sample.length;
      this.sample.push(movie);
      this.router.navigate(['/movie-list']);
    } else {
      const index = this.sample.findIndex(
        (e) => e.id === Number(this.routerParams.id)
      );
      if (index !== -1) {
        this.sample[index] = movie;
        this.router.navigate(['/movie-list']);
      }
    }
  } // saveMovie()

  get cast(): any {
    return this.movieAddEditFormGroup.get('cast') as FormArray;
  } // get cast ()

  addNewCastField() {
    this.cast.push(this.formBuilder.control(''));
  } // addNewCastField()
  
} // class
