import { Component, VERSION, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  movieId = 1;
  movie!: any;

  constructor(private fb: FormBuilder, private moviesService: MovieService) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      actors: this.fb.array([]),
    });

    this.moviesService.getMovie(this.movieId).subscribe((movieData) => {
      this.movie = movieData;
      console.log(movieData);

      this.movie.actors.map((actor: any) => {
        const actorsForm = this.fb.group({
          actor: actor.actor,
          role: actor.role,
        });

        this.actors.push(actorsForm);
      });

      this.form.patchValue({
        title: this.movie.title,
      });

      console.log(this.form.value);
    });
  }

  addActor() {
    const actorsForm = this.fb.group({
      actor: '',
      role: '',
    });
    this.actors.push(actorsForm);
  }
  removeActor(i: number) {
    this.actors.removeAt(i);
    //this.actors.splice(i, 0);
  }

  onSubmit() {}

  get actors() {
    return this.form.controls['actors'] as FormArray;
  }
}
