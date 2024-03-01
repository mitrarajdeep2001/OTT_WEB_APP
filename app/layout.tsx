import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/Header";
import { ThemeProvider } from "@components/theme-provider";

export const metadata: Metadata = {
  title: "MoviesHubb by Rajdeep",
  description: "This app is build for my learning purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-white dark:bg-[#1A1C29]"}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
