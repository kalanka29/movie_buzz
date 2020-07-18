import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListAddNewComponent } from './movie-list-add-new.component';

describe('MovieListAddNewComponent', () => {
  let component: MovieListAddNewComponent;
  let fixture: ComponentFixture<MovieListAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
