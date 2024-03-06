import { Movie } from "@types";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  const res = await fetch(url, options);
  type searchResult = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  const {results} = await res.json() as searchResult;
  return results;
}

export async function getTrendingMovies() {
  const url = new URL("https://api.themoviedb.org/3/trending/movie/day");
  const data = await fetchFromTMDB(url);
  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);
  return data;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data;
}

export async function getDiscoverMovies(id?: string, genre?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  id && url.searchParams.set("with_genres", id);
  genre && url.searchParams.set("with_keywords", genre);
  const data = await fetchFromTMDB(url);
  return data;
}

export async function getSearchedMovies(keyword: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  keyword && url.searchParams.set("with_keywords", keyword);
  const data = await fetchFromTMDB(url);
  return data;
}
