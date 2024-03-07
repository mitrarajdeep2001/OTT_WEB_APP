import { getDiscoverMovies } from "@lib/fetchMovie.utils";
import React from "react";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  genre?: string;
};
const CarouselBannerWrapper = async ({ id, genre }: Props) => {
  console.log(id, genre);

  const movies = await getDiscoverMovies(id, genre);
  return <CarouselBanner movies={movies} />;
};

export default CarouselBannerWrapper;
