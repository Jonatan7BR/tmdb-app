export interface Movie {
	poster: string;
	title: string;
	releaseDate: Date;
	overview: string;
}

export interface MovieResponse {
	page: number;
	results: Array<{
		poster_path: string | null;
		overview: string;
		release_date: string;
		title: string;
	}>;
	total_pages: number;
}
