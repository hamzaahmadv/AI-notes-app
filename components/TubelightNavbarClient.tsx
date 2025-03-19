"use client";

import { Home, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function TubelightNavbarClient() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Notes', url: '/notes', icon: FileText }
  ];

  return (
    <NavBar 
      items={navItems} 
      className="relative flex justify-center text-lg font-medium text-black dark:text-white w-fit mx-auto"
    />
  );
} 