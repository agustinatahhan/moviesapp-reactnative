import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import {  UpcomingMovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const upcomingMovies = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const upcomingMovies = await fetcher.get<UpcomingMovieDBResponse>("/upcoming");

    return upcomingMovies.results.map(result => MovieMapper.fromMoviDBresultToEntity(result));

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - upcomingMovies");
  }
};
