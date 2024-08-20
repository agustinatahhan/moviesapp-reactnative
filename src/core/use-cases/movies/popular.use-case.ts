import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<PopularMovieDBResponse>("/popular");

    return popularMovies.results.map(result => MovieMapper.fromMoviDBresultToEntity(result));

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - popularPlaying");
  }
};
