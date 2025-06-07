import { Menu } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import LanguageToggle from "../LanguageToggle";

interface Props {
  show: boolean;
  onShowChange: ()=>void;
}

export default function NavbarCollapsible({show,onShowChange}: Props) {
  return (
      <div className={`${show ? 'opacity-[1] pointer-events-auto' : 'opacity-[0] pointer-events-none'} absolute top-[0] left-[0] z-[19] w-full h-dvh bg-background-header z-[19]
      transition-opacity duration-[0.3s] ease-in`}>
        <ul className="w-full h-full flex flex-col items-end pt-[7rem] px-5">
          <li onClick={()=>onShowChange()} className="my-2 flex justify-center items-center text-links-color hover:text-links-hover">
            <a href="/#">Home</a>
          </li>
          <li onClick={()=>onShowChange()} className="my-2 flex justify-center items-center hover:text-links-hover">
            <a href="/#projects">Projects</a>
          </li>
          <li onClick={()=>onShowChange()} className="my-2 flex justify-center items-center hover:text-links-hover">
            <a href="/#contact">Contact</a>
          </li>
          <li onClick={()=>onShowChange()} className="my-2 flex justify-center items-center hover:text-links-hover">
            <ModeToggle />
          </li>
          <li onClick={()=>onShowChange()} className="my-2 flex justify-center items-center hover:text-links-hover">
            <LanguageToggle />
          </li>
        </ul>
      </div>
  );
}
