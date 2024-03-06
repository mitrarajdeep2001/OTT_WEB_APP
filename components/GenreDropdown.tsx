import { ChevronDown } from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import Link from "next/link";

const GenreDropdown = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const res = await fetch(url, options);
  const { genres } = await res.json();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 outline-none">
        Genre
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="h-[30rem]">
        <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genres.map((genre: { id: string; name: string }) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}/?genre=${genre.name}`}>{genre.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
