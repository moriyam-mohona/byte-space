"use client";

import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 w-full">
        <Navbar />
      </header>
    </>
  );
}
