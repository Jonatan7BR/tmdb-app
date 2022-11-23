import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { POSTER_BASE_URL } from 'src/app/utils/tmdb.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentPage = 1;
  totalPages = 0;
  movies: Movie[] = [];

  constructor (private movieService: MovieService) {}

  ngOnInit (): void {
    this.fetchMovies();
  }

  fetchMovies (): void {
    this.movieService
      .getTrending()
      .subscribe((response): void => {
        this.totalPages = response.total_pages;
        this.movies = response.results.map((result): Movie => ({
          poster: POSTER_BASE_URL + result.poster_path,
          title: result.title,
          releaseDate: moment(result.release_date).toDate(),
          overview: result.overview
        }));
      });
  }

}
