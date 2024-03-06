import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.png";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center z-20 p-2 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={80} />
      </Link>
      <div className="flex gap-x-2 items-center">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
