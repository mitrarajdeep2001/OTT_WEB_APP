import { Movie } from "@types";
import * as React from "react";
import MovieCard from "./MovieCard";

type Prop = {
  title: string;
  movies: Movie[];
  isVerticle?: boolean;
};
const MoviesCarousel = ({ title, movies, isVerticle }: Prop) => {
  return (
    <div>
      <h2 className="font-bold text-xl ml-10">{title}</h2>
      <div
        className={`flex overflow-scroll scrollbar-hide space-x-4 px-5 lg:px-10 py-5 ${
          isVerticle && "flex-col space-x-0 space-y-12"
        }`}
      >
        {isVerticle
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={
                  "flex flex-col lg:flex-row space-y-5 mb-5 items-center space-x-5"
                }
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default MoviesCarousel;
