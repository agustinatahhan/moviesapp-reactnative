import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedMovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const topRatedUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const topRatedMovies = await fetcher.get<TopRatedMovieDBResponse>("/top_rated");

    return topRatedMovies.results.map(result => MovieMapper.fromMoviDBresultToEntity(result));

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - topRatedMovies");
  }
};
