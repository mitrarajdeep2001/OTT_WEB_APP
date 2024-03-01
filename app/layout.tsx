import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "MoviesHub by Rajdeep",
  description: "This app is build for my learning purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
