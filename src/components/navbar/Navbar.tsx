"use client";

import React, { useState } from "react";
import NavbarCollapsible from "./NavbarCollapsible";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [showNavbarCollapsible, setShowNavbarCollapsible] =
    useState<boolean>(false);

  return (
    <>
      <nav className="flex w-full h-full max-w-7xl text-sm  px-3 py-[0px]! justify-between items-center z-[20]
      lg:text-lg">
        <div className="flex text-sm ">
          <Link
            className="flex"
            target="_blank"
            href={"https://github.com/leonelSubelza"}
          >
            Leonel Subelza
          </Link>
        </div>
        <div
          className="flex justify-end items-center text-lg 
      lg:w-[30%]
      "
        >
          <ul className="hidden w-full flex flex-wrap justify-evenly items-center mx-3 lg:flex">
            <li className="flex justify-center items-center text-links-color hover:text-links-hover">
              <a href="/#">Home</a>
            </li>
            <li className="flex justify-center items-center hover:text-links-hover">
              <a href="/#projects">Projects</a>
            </li>
          </ul>

          <div className="flex flex-wrap justify-end items-end">
            <Button
              variant={"ghost"}
              className="hover:cursor-pointer px-[0px]!"
              onClick={() => setShowNavbarCollapsible(!showNavbarCollapsible)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </nav>
      <NavbarCollapsible
        show={showNavbarCollapsible}
        onShowChange={() => setShowNavbarCollapsible(!showNavbarCollapsible)}
      />
    </>
  );
}
