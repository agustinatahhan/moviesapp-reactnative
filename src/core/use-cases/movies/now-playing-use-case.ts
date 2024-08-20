import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const nowPlayingMovies = await fetcher.get<NowPlayingResponse>("/now_playing");

    return nowPlayingMovies.results.map(result => MovieMapper.fromMoviDBresultToEntity(result));

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies - NowPlaying");
  }
};
