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
      <h2>{title}</h2>
      {movies &&
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default MoviesCarousel;
