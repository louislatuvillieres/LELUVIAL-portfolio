"use client";
import { loadComponents } from "next/dist/server/load-components";
import Image from "next/image";
import Header from '@components/Header';
import Menu from "./components/Menu";
import { useState } from "react";

export default function Home() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto bg-white">
      <Header setMenuOpen={setMenuOpen}/>
      <Menu isOpen={isMenuOpen}/>
      <div className="bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">Responsive Container Example</h1>
        <p className="mb-2">
          This container's width will adjust based on the screen size using Tailwind CSS breakpoints.
        </p>
        <p className="mb-2">Customize this content as needed.</p>
      </div>
    </div>
  );
}
