import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('searchResults') searchResults!: ElementRef<HTMLDivElement>;

  searchQuery = '';
  currentPage = 1;
  totalPages = 0;
  noResults = false;
  searched = '';
  movies: Movie[] = [];

  constructor (private movieService: MovieService) {}

  ngOnInit (): void {}

  fetchMovies (): void {
    this.movieService
      .getMovies(this.searchQuery, this.currentPage)
      .subscribe((response): void => {
        this.totalPages = response.total_pages;
        this.movies = response.results.map((result): Movie => ({
          poster: POSTER_BASE_URL + result.poster_path,
          title: result.title,
          releaseDate: moment(result.release_date).toDate(),
          overview: result.overview
        }));
        this.noResults = this.movies.length === 0;
        this.searched = this.searchQuery;
      });
  }

  changePage (page: number): void {
    this.currentPage = page;
    this.searchResults.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.fetchMovies();
  }

}
