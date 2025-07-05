import React from "react";
import { ModeToggle } from "../ModeToggle";
import LanguageToggle from "../LanguageToggle";
import AnimationToggle from "../AnimationToggle";

interface Props {
  show: boolean;
  onShowChange: () => void;
}

export default function NavbarCollapsible({ show, onShowChange }: Props) {
  return (
    <>
      <div
        className={`${
          show
            ? "opacity-[1] pointer-events-auto"
            : "opacity-[0] pointer-events-none"
        } flex  absolute top-[0] left-[0] w-screen h-screen px-3 bg-background-header justify-center items-center transition-opacity duration-[.3s] ease-in z-[19]`}
      >
        <ul
          className="w-7xl h-full flex flex-col items-end py-[0] pt-[5rem] "
          
        >
          <li
            onClick={() => onShowChange()}
            className="lg:hidden mt-[0px] mb-2 flex justify-center items-center text-links-color hover:text-links-hover "
          >
            <a href="/#">Home</a>
          </li>
          <li
            onClick={() => onShowChange()}
            className="lg:hidden mt-[0px] mb-2 flex justify-center items-center hover:text-links-hover"
          >
            <a href="/#projects">Projects</a>
          </li>
          {/* <li onClick={()=>onShowChange()} className="lg:hidden mt-[0px] mb-2 flex justify-center items-center hover:text-links-hover">
            <a href="/#contact">Contact</a>
          </li> */}
          <li
            className="flex mt-[0px] mb-2 cursor-pointer justify-center items-center hover:text-links-hover"
          >
            <span>Animation </span>
            <AnimationToggle onClick={onShowChange} />
          </li>
          <li
            className="flex mt-[0px] mb-2 justify-center items-center hover:text-links-hover"
          >
            <ModeToggle onClick={onShowChange} />
          </li>
          <li
            className="flex mt-[0px] cursor-pointer mb-2 justify-center items-center hover:text-links-hover"
          >
            <LanguageToggle onClick={onShowChange} />
          </li>
        </ul>
      </div>
    </>
  );
}
