import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher
    );
    const topRatedPromise = await UseCases.topRatedUseCase(movieDBFetcher);
    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
    const upcomingPromise = await UseCases.upcomingMovies(movieDBFetcher);

    const [nowPlayingMovies, topRatedMovies, popularMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        topRatedPromise,
        popularPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
  };

  return {
    isLoading,
    nowPlaying,
  };
};
