"use client";
import { Movie } from "@types";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@lib/getImagePath.utils";

const CarouselBanner = ({ movies }: { movies: Movie[] }) => {
  console.log(movies);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000 }),
  ]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {movies?.map((movie) => (
          <div
            className="flex-full min-w-0 lg:h-[80vh] relative"
            key={movie.id}
          >
            <Image
              src={getImagePath(movie.backdrop_path || movie.poster_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}
            />
            <div className="absolute bottom-10 md:bottom-32 left-10 md:left-28 z-10">
              <h2 className="text-lg md:text-4xl font-bold mb-3 w-1/2">
                {movie.title}
              </h2>
              <p className="hidden lg:block w-1/2">{movie.overview}</p>
            </div>
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
