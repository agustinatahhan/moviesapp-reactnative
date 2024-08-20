export interface NowPlayingResponse {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface PopularMovieDBResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface TopRatedMovieDBResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface UpcomingMovieDBResponse {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Hi = "hi",
    Zh = "zh",
}


