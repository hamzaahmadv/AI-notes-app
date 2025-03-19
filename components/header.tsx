"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import TubelightNavbarClient from "@/components/TubelightNavbarClient";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white/80 dark:bg-black/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center py-2 px-4">
        <div className="w-1/5 flex justify-start">
          <Link href="/" className="text-xl font-bold">
            Notes App
          </Link>
        </div>
        
        <div className="w-3/5 flex justify-center">
          <TubelightNavbarClient />
        </div>
        
        <div className="w-1/5 flex justify-end items-center space-x-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
} 