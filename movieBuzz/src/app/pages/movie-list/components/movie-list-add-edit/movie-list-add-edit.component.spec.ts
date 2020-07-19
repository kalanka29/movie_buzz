import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListAddEditComponent } from './movie-list-add-edit.component';

describe('MovieListAddEditComponent', () => {
  let component: MovieListAddEditComponent;
  let fixture: ComponentFixture<MovieListAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
