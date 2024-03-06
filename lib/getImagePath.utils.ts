export default function getImagePath(endpoint: string, fullSize?: boolean) {
  const path = endpoint
    ? `https://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}${endpoint}`
    : null;
  return path;
}
