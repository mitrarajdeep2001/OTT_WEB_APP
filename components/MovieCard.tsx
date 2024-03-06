import React from "react";
import { Movie } from "@types";
import Image from "next/image";
import getImagePath from "@lib/getImagePath.utils";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <Image
        className="w-fit lg:w-min-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path, false)}
        alt={movie.title}
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default MovieCard;
