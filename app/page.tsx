import CarouselBannerWrapper from "@components/CarouselBannerWrapper";
import MoviesCarousel from "@components/MoviesCarousel";
import {
  getPopularMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@lib/fetchMovie.utils";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const trendingMovies = await getTrendingMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="absolute top-0">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={trendingMovies} title="Trending" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
