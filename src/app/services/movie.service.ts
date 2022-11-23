import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../models/movie.model';

const { apiBase, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor (private http: HttpClient) {}

  getMovies (query: string, page: number = 1): Observable<MovieResponse> {
    const encodedQuery = encodeURI(query);
    return this.http.get<MovieResponse>(
      `${apiBase}search/movie?api_key=${apiKey}&page=${page}&query=${encodedQuery}`
    );
  }

  getTrending (): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${apiBase}trending/movie/day?api_key=${apiKey}`);
  }

}
