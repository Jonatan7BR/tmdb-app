import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import * as moment from 'moment';
import { Observable, of, switchMap } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
import { POSTER_BASE_URL } from '../utils/tmdb.utils';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<Movie[]> {

  constructor (private movieService: MovieService) {}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
    return this.movieService.getTrending().pipe(
      switchMap((response): Observable<Movie[]> =>
        of(response.results.map((result): Movie => (
          {
            poster: POSTER_BASE_URL + result.poster_path,
            title: result.title,
            releaseDate: moment(result.release_date).toDate(),
            overview: result.overview
          }
        )))
      )
    );
  }

}
