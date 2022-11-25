import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor (private route: ActivatedRoute) {}

  ngOnInit (): void {
    const { movies } = this.route.snapshot.data;
    this.movies = movies;
  }

}
