'use client'

import React, { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import LanguageToggle from "../LanguageToggle";
import NavbarCollapsible from "./NavbarCollapsible";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [showNavbarCollapsible, setShowNavbarCollapsible] = useState<boolean>(false);

  return (
    <>
    <nav className="flex w-full max-w-7xl text-sm lg:text-lg lg:px-4 py-2 h-full flex justify-between items-center z-[20] ">
      <div className="flex text-lg">
        <Link className="flex" target="_blank" href={"https://github.com/leonelSubelza"}>
          Leonel Subelza
        </Link>
      </div>
      <div className="hidden lg:flex w-[100%] lg:w-[55%] lg:w-[50%] justify-between items-center text-lg">
        <ul className="w-full flex flex-wrap justify-evenly items-center mx-3">
          <li className="flex justify-center items-center text-links-color hover:text-links-hover">
            <a href="/#">Home</a>
          </li>
          <li className="flex justify-center items-center hover:text-links-hover">
            <a href="/#projects">Projects</a>
          </li>
          {/* <li className="flex justify-center items-center hover:text-links-hover">
            <a href="/#contact">Contact</a>
          </li> */}
        </ul>
        <div className="w-[50%] flex flex-wrap justify-between items-center">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
      <div className="mg:hidden lg:hidden flex flex-wrap justify-center items-end">
        <Button variant={"ghost"} onClick={()=>setShowNavbarCollapsible(!showNavbarCollapsible)}>
          <Menu />
        </Button>
      </div>
    </nav>
    <NavbarCollapsible 
    show={showNavbarCollapsible} 
    onShowChange={()=>setShowNavbarCollapsible(!showNavbarCollapsible)}/>
    </>
  );
}
