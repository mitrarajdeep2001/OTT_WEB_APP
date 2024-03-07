import React from "react";
import { Movie } from "@types";
import Image from "next/image";
import getImagePath from "@lib/getImagePath.utils";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative flex-shrink-0 transform hover:scale-105 transition duration-200 ease-out cursor-pointer hover:drop-shadow-lg">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80" />
      <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
      <Image
        className="w-fit lg:w-min-[400px] h-56  object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path, false)}
        alt={movie.title}
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default MovieCard;
