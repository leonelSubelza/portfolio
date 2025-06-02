import { Project, Technology } from "@/app/mock/entities";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Props {
  project: Project;
}

export default function ProjectComponent({ project }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // o un loading spinner

  return (
    <div className="
    h-[500px] w-[100%] md:w-[50%] lg:w-[33%]
    flex flex-col overflow-y-auto overflow-x-hidden border border-black-200">
      <div className="flex h-[50%] cursor-pointer">
        <Link className="h-full w-full" target="_blank" href={project.url}>
          <img
            className={`h-full w-full ${theme === 'light' && 'filter grayscale contrast-120 brightness-90'}`}
            // className={`h-full w-full`}
            src={
              project.image === ""
                ? "https://andreag-portfolio.netlify.app/img/portfolio.webp"
                : project.image
            }
          />
        </Link>
      </div>
      <div className="h-[30%] flex flex-col p-3 ">
        <h1 className="text-xl">{project.title}</h1>
        <div className="overflow-y-auto overflow-x-hidden text-start m-auto">
          <p className="text-xs">{project.description}</p>
        </div>
      </div>
      <div className="h-[10%] flex flex-wrap px-3 justify-between">
        <div className="w-[50%] flex flex-wrap justify-start items-center overflow-y-auto">
          {project.technologies.map(
            (tech: Technology) =>
              tech.icon !== "" && (
                <Tooltip key={tech.id}>
                  <TooltipTrigger asChild>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={30}
                      height={30}
                      className={`inline-block m-1 rounded-[20%] ${
                        theme === "light" &&
                        "filter grayscale contrast-150 brightness-90"
                      }`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              )
          )}
        </div>
        <div className="w-[50%] flex justify-end items-end">
          <Link target="_blank" href={project.url}>
            <Button variant="link" size="sm" className="cursor-pointer">
              <span className="text-xs">Source Code</span>
              <Image
                src="/icons/github.svg"
                alt="github"
                width={30}
                height={30}
                className="inline-block mr-2"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
